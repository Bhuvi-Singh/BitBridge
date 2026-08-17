// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY <COPYRIGHT HOLDER> ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco

// visualizers/algorithms/BST.js
// Binary Search Tree — logic ported 1:1 from CS1332's BST.js (David Galles /
// USF visualization-tool), adapted to vanilla ES6 + our command-driven engine.
// Matches: compare(), addH() (duplicate = ignored, no node created), removeH()
// (leaf / 1-child / 2-child cases), removeSucc()/removePred() (successor =
// leftmost of right subtree, predecessor = rightmost of left subtree, walking
// down only — never needs ancestor fallback since a 2-child node's right/left
// subtree is guaranteed non-empty), resizeWidths()/setNewPositions() (subtree-
// width based layout), and an animated FIFO queue for level-order traversal.
//
// Difference from CS1332: the tree persists across operations (only the nodes
// that actually change are created/moved/deleted) instead of the "Text field ->
// button" bar being redrawn from scratch, and a standalone Predecessor/Successor
// query is added (with proper ancestor-traversal fallback for nodes that lack
// the relevant direct subtree) — CS1332 only uses those two names internally
// for 2-child deletion, where no subtree is ever missing.

import Algorithm from './Algorithm.js';
import { VisualizerRegistry } from '../VisualizerEngine.js';

const HEIGHT_DELTA = 80;
const STARTING_Y = 110; // leaves headroom above the tree for status/traversal labels
const STATUS_Y = 20;
const TRAVERSAL_Y = 44; // separate row, ~46px clear of the root node's top edge
const QUEUE_START_X = 60;
const QUEUE_SPACING = 50;

class BSTNode {
	constructor(data, id) {
		this.data = data;
		this.id = id;
		this.left = null;
		this.right = null;
		this.parent = null;
		this.x = 0;
		this.y = 0;
		this.leftWidth = 0;
		this.rightWidth = 0;
	}
}

export default class BST extends Algorithm {
	constructor(engine, controlsId) {
		super(engine, controlsId);
		this.root = null;
		this.nodeMap = new Map();
		this.nextNodeId = 0;
		// Track which node/edge ids exist as of the QUEUED command stream (not the
		// engine's already-executed state, which lags behind while we're still
		// building this operation's command list — checking the live engine here
		// caused stale reads: a just-queued 'delete' hadn't run yet, so a later
		// 'updateLine' targeting the same id would queue against soon-to-be-deleted
		// object and silently no-op once the delete actually executed).
		this.liveNodeIds = new Set();
		this.liveEdgeIds = new Set();
		this.resultBoxIds = []; // boxes in the bottom "results" row, filled live during traversal
		this.predSucc = 'succ'; // toggle: which strategy replaces a 2-child node on delete
		this.lastFindVal = null;

		// Persistent status + traversal-result labels, created once, updated via setText
		this.statusLabelId = this.id();
		this.traversalLabelId = this.id();
		const cw = this.engine.canvas.width || 800;
		this.cmd('createLabel', this.statusLabelId, '', cw / 2, STATUS_Y);
		this.cmd('createLabel', this.traversalLabelId, '', cw / 2, TRAVERSAL_Y);
		this.run();

		this.setupControls();
	}

	setupControls() {
		this.selectedOrder = 'pre';

		// Insert group
		this.startGroup();
		const insertInput = this.addTextInputInline('Value');
		this.addButtonInline('Insert', () => {
			const v = insertInput.value.trim();
			if (!v) { this.shake(insertInput); return; }
			this.lastFindVal = v;
			this.insert(v);
			insertInput.value = '';
		});

		// Delete group
		this.startGroup();
		const deleteInput = this.addTextInputInline('Value');
		this.addButtonInline('Delete', () => {
			const v = deleteInput.value.trim();
			if (!v) { this.shake(deleteInput); return; }
			this.deleteVal(v);
			deleteInput.value = '';
		});

		// Find group
		this.startGroup();
		const findInput = this.addTextInputInline('Value');
		this.addButtonInline('Find', () => {
			const v = findInput.value.trim();
			if (!v) { this.shake(findInput); return; }
			this.lastFindVal = v;
			this.find(v);
		});

		// Traversal group: radio list + single Traverse button
		this.startGroup();
		this.addRadioList('traversalOrder', [
			['pre', 'Pre-order'],
			['in', 'In-order'],
			['post', 'Post-order'],
			['level', 'Level-order'],
		], (v) => { this.selectedOrder = v; }, 0);
		this.addButtonInline('Traverse', () => this.traverse(this.selectedOrder));

		// Random / Clear group (stacked)
		this.startGroup(true);
		this.addButtonInline('Random', () => this.randomTree());
		this.addButtonInline('Clear', () => this.clearAll());

		// Predecessor / Successor toggle: selects 2-child delete strategy AND,
		// on selection, queries pred/succ of the last Inserted/Found value.
		this.startGroup();
		this.addRadioList('predSucc', [
			['pred', 'Predecessor'],
			['succ', 'Successor'],
		], (v) => {
			this.predSucc = v;
			if (this.lastFindVal === null) { this._setStatus('Find or Insert a value first'); this.run(); return; }
			if (v === 'pred') this.predecessor(this.lastFindVal);
			else this.successor(this.lastFindVal);
		}, 1);
	}

	// ---- compare(): numeric-aware, falls back to string localeCompare ----
	compare(a, b) {
		const numA = parseInt(a);
		const numB = parseInt(b);
		const isNumA = !isNaN(numA);
		const isNumB = !isNaN(numB);
		if (isNumA && isNumB) return numA - numB;
		if (!isNumA && !isNumB) return String(a).localeCompare(String(b));
		return isNumA ? -1 : 1;
	}

	// Radius grows with digit count so long values (e.g. 5-digit numbers)
	// never spill text outside the node — capped so it can't get huge.
	_nodeRadius(data) {
		const len = String(data).length;
		return Math.min(40, 20 + Math.max(0, len - 2) * 6);
	}

	// ---- Status labels (persistent — update in place, never recreate) ----
	_setStatus(msg) { this.cmd('setText', this.statusLabelId, msg); }
	_resetAllNodeColors() {
		this.nodeMap.forEach((_node, id) => {
			this.cmd('setHighlight', `node-${id}`, false);
			this.cmd('setForegroundColor', `node-${id}`, this.palette.text);
			this.cmd('setBackgroundColor', `node-${id}`, this.palette.nodeBg);
		});
	}

	// ---- Bottom "results" row: fills up live as traversal visits each node ----
	_clearResultRow() {
		this.resultBoxIds.forEach(id => this.cmd('delete', id));
		this.resultBoxIds = [];
	}
	_resultRowY() { return (this.engine.canvas.height || 500) - 30; }
	_appendResultBox(value) {
		const id = this.id();
		const x = 50 + this.resultBoxIds.length * 46;
		this.cmd('createRect', id, String(value), 38, 38, x, this._resultRowY());
		this.cmd('setBackgroundColor', id, this.palette.success);
		this.cmd('setForegroundColor', id, '#ffffff');
		this.resultBoxIds.push(id);
	}

	// ---- Structural helpers ----
	_findNode(val) {
		let cur = this.root;
		while (cur) {
			const c = this.compare(val, cur.data);
			if (c === 0) return cur;
			cur = c < 0 ? cur.left : cur.right;
		}
		return null;
	}

	// Full BST predecessor: rightmost of left subtree, else nearest ancestor
	// for which this node lies in the right subtree.
	_predecessorOf(node) {
		if (node.left) {
			let cur = node.left;
			while (cur.right) cur = cur.right;
			return cur;
		}
		let cur = node, parent = node.parent;
		while (parent && cur === parent.left) { cur = parent; parent = parent.parent; }
		return parent;
	}

	// Full BST successor: leftmost of right subtree, else nearest ancestor
	// for which this node lies in the left subtree.
	_successorOf(node) {
		if (node.right) {
			let cur = node.right;
			while (cur.left) cur = cur.left;
			return cur;
		}
		let cur = node, parent = node.parent;
		while (parent && cur === parent.right) { cur = parent; parent = parent.parent; }
		return parent;
	}

	// Deletes a node's own circle plus any of its 3 possible edges (parent-edge,
	// own-left-edge, own-right-edge). Deleting a nonexistent id is a harmless no-op.
	_deleteNodeVisual(node) {
		this.cmd('delete', `node-${node.id}`);
		this.liveNodeIds.delete(node.id);
		if (node.parent) {
			const side = node.parent.left === node ? 'l' : 'r';
			const parentEdgeId = `edge-${node.parent.id}-${side}`;
			this.cmd('delete', parentEdgeId);
			this.liveEdgeIds.delete(parentEdgeId);
		}
		const leftEdgeId = `edge-${node.id}-l`;
		const rightEdgeId = `edge-${node.id}-r`;
		this.cmd('delete', leftEdgeId);
		this.cmd('delete', rightEdgeId);
		this.liveEdgeIds.delete(leftEdgeId);
		this.liveEdgeIds.delete(rightEdgeId);
		this.nodeMap.delete(node.id);
	}

	// ---- Layout: subtree-width based (mirrors CS1332 resizeWidths/setNewPositions) ----
	// Minimum half-width now scales with each node's OWN radius (not a fixed
	// constant), so multi-digit nodes reserve enough horizontal room and
	// sibling subtrees can never be packed close enough for edges to cross
	// through a node.
	_resizeWidths(node) {
		if (!node) return 0;
		const minHalf = this._nodeRadius(node.data) + 10;
		node.leftWidth = Math.max(this._resizeWidths(node.left), minHalf);
		node.rightWidth = Math.max(this._resizeWidths(node.right), minHalf);
		return node.leftWidth + node.rightWidth;
	}

	_setNewPositions(node, x, y, side) {
		if (!node) return;
		node.y = y;
		if (side === -1) x -= node.rightWidth;
		else if (side === 1) x += node.leftWidth;
		node.x = x;
		this._setNewPositions(node.left, x, y + HEIGHT_DELTA, -1);
		this._setNewPositions(node.right, x, y + HEIGHT_DELTA, 1);
	}

	// Walks the CURRENT tree; creates any circle/edge that doesn't exist yet
	// (per our own queued-command bookkeeping, not the lagging engine state),
	// repositions ones that do. Never touches nodes no longer in the tree.
	_syncTree(node) {
		if (!node) return;
		if (!this.liveNodeIds.has(node.id)) {
			this.cmd('createCircle', `node-${node.id}`, String(node.data), node.x, node.y, this._nodeRadius(node.data));
			this.liveNodeIds.add(node.id);
		} else {
			this.cmd('setPosition', `node-${node.id}`, node.x, node.y);
		}
		if (node.left) {
			const edgeId = `edge-${node.id}-l`;
			if (!this.liveEdgeIds.has(edgeId)) {
				this.cmd('createLine', edgeId, node.x, node.y, node.left.x, node.left.y, this.palette.muted);
				this.liveEdgeIds.add(edgeId);
			} else {
				this.cmd('updateLine', edgeId, node.x, node.y, node.left.x, node.left.y);
			}
			this._syncTree(node.left);
		}
		if (node.right) {
			const edgeId = `edge-${node.id}-r`;
			if (!this.liveEdgeIds.has(edgeId)) {
				this.cmd('createLine', edgeId, node.x, node.y, node.right.x, node.right.y, this.palette.muted);
				this.liveEdgeIds.add(edgeId);
			} else {
				this.cmd('updateLine', edgeId, node.x, node.y, node.right.x, node.right.y);
			}
			this._syncTree(node.right);
		}
	}

	_computeDepth(node) {
		if (!node) return 0;
		return 1 + Math.max(this._computeDepth(node.left), this._computeDepth(node.right));
	}

	// Grows (never shrinks below the 500px baseline) the canvas's actual pixel
	// height so deep/unbalanced trees don't draw past the bottom edge and get
	// silently clipped. Resizing a <canvas> wipes its pixel buffer, so redraw
	// immediately after to avoid a blank-frame flash.
	_ensureCanvasFits() {
		const depth = this._computeDepth(this.root);
		const needed = STARTING_Y + depth * HEIGHT_DELTA + 130; // node radius + bottom margin for the traversal result row
		const canvas = this.engine.canvas;
		const target = Math.max(500, needed);
		if (canvas.height !== target) {
			this.resizeCanvas(canvas.width, target);
			this.engine.objectManager.draw();
		}
	}

	_resizeAndSync() {
		if (!this.root) return;
		this._ensureCanvasFits();
		const canvasWidth = this.engine.canvas.width || 800;
		this._resizeWidths(this.root);
		let startX = canvasWidth / 2;
		if (this.root.leftWidth > startX) startX = this.root.leftWidth;
		else if (this.root.rightWidth > startX) startX = Math.max(this.root.leftWidth, 2 * startX - this.root.rightWidth);
		this._setNewPositions(this.root, startX, STARTING_Y, 0);
		this._syncTree(this.root);
	}

	// ---- Insert (mirrors addH: duplicate is ignored, no node created) ----
	insert(val) {
		this._resetAllNodeColors();
		this._setStatus(`Inserting ${val}...`);
		this.step();

		const { newId, duplicate } = this._addH(val);

		if (duplicate) {
			this._setStatus(`${val} == ${val}. Ignoring duplicate!`);
			this.step();
			this.run();
			return;
		}

		this._resizeAndSync();
		this.cmd('setBackgroundColor', `node-${newId}`, this.palette.success);
		this.cmd('setForegroundColor', `node-${newId}`, '#ffffff');
		this._setStatus(`Inserted ${val}`);
		this.step();
		this.run();
	}

	// Structural insert with per-comparison narration; returns { newId, duplicate }
	_addH(val) {
		if (!this.root) {
			const node = new BSTNode(val, this.nextNodeId++);
			this.nodeMap.set(node.id, node);
			this.root = node;
			return { newId: node.id, duplicate: false };
		}
		let cur = this.root;
		while (true) {
			this.highlight(`node-${cur.id}`, this.palette.accent);
			const c = this.compare(val, cur.data);
			if (c === 0) {
				this.step();
				this.unhighlight(`node-${cur.id}`);
				this.cmd('setForegroundColor', `node-${cur.id}`, this.palette.text);
				return { newId: cur.id, duplicate: true };
			}
			this._setStatus(c < 0 ? `${val} < ${cur.data}. Looking at left subtree` : `${val} > ${cur.data}. Looking at right subtree`);
			this.step();
			this.unhighlight(`node-${cur.id}`);
			this.cmd('setForegroundColor', `node-${cur.id}`, this.palette.text);

			if (c < 0) {
				if (!cur.left) {
					const node = new BSTNode(val, this.nextNodeId++);
					this.nodeMap.set(node.id, node);
					node.parent = cur; cur.left = node;
					return { newId: node.id, duplicate: false };
				}
				cur = cur.left;
			} else {
				if (!cur.right) {
					const node = new BSTNode(val, this.nextNodeId++);
					this.nodeMap.set(node.id, node);
					node.parent = cur; cur.right = node;
					return { newId: node.id, duplicate: false };
				}
				cur = cur.right;
			}
		}
	}

	// ---- Delete (mirrors removeH / removeSucc / removePred) ----
	deleteVal(val) {
		this._resetAllNodeColors();
		this._setStatus(`Deleting ${val}...`);
		this.step();

		if (!this.root) { this._setStatus('Tree is empty'); this.step(); this.run(); return; }

		this.root = this._removeH(this.root, val);
		if (this.root) this.root.parent = null;
		this._resizeAndSync();
		this.step();
		this.run();
	}

	_removeH(curr, val) {
		if (!curr) {
			this._setStatus(`${val} not found in the tree`);
			this.step();
			return null;
		}
		this.highlight(`node-${curr.id}`, this.palette.accent);
		const c = this.compare(val, curr.data);

		if (c < 0) {
			this._setStatus(`${val} < ${curr.data}. Looking left`);
			this.step();
			this.unhighlight(`node-${curr.id}`);
			this.cmd('setForegroundColor', `node-${curr.id}`, this.palette.text);
			curr.left = this._removeH(curr.left, val);
			if (curr.left) curr.left.parent = curr;
			return curr;
		}
		if (c > 0) {
			this._setStatus(`${val} > ${curr.data}. Looking right`);
			this.step();
			this.unhighlight(`node-${curr.id}`);
			this.cmd('setForegroundColor', `node-${curr.id}`, this.palette.text);
			curr.right = this._removeH(curr.right, val);
			if (curr.right) curr.right.parent = curr;
			return curr;
		}

		// Found the node to delete
		this._setStatus(`Found node with data ${curr.data}`);
		this.step();
		this.unhighlight(`node-${curr.id}`);
		this.cmd('setForegroundColor', `node-${curr.id}`, this.palette.text);

		if (!curr.left && !curr.right) {
			this._setStatus('Element to delete is a leaf node');
			this.step();
			this._deleteNodeVisual(curr);
			this.step();
			return null;
		}
		if (!curr.left) {
			this._setStatus('One-child case, replace with right child');
			this.step();
			this._deleteNodeVisual(curr);
			this.step();
			return curr.right;
		}
		if (!curr.right) {
			this._setStatus('One-child case, replace with left child');
			this.step();
			this._deleteNodeVisual(curr);
			this.step();
			return curr.left;
		}

		// Two-child case: replace data with successor or predecessor per toggle
		const dummy = [];
		if (this.predSucc === 'succ') {
			this._setStatus('Two-child case, replace data with successor');
			this.step();
			curr.right = this._removeSucc(curr.right, dummy);
			if (curr.right) curr.right.parent = curr;
		} else {
			this._setStatus('Two-child case, replace data with predecessor');
			this.step();
			curr.left = this._removePred(curr.left, dummy);
			if (curr.left) curr.left.parent = curr;
		}
		curr.data = dummy[0];
		this.cmd('setText', `node-${curr.id}`, String(curr.data));
		this.cmd('setRadius', `node-${curr.id}`, this._nodeRadius(curr.data));
		this.step();
		return curr;
	}

	// Successor of a 2-child node: leftmost node of the right subtree.
	// Never needs ancestor fallback — right subtree is guaranteed non-empty.
	_removeSucc(curr, dummy) {
		this.highlight(`node-${curr.id}`, this.palette.highlight);
		this.step();
		if (!curr.left) {
			this._setStatus('No left child, this is the successor');
			this.step();
			dummy.push(curr.data);
			this._deleteNodeVisual(curr);
			this.step();
			return curr.right;
		}
		this._setStatus('Left child exists, keep going left');
		this.step();
		this.unhighlight(`node-${curr.id}`);
		this.cmd('setForegroundColor', `node-${curr.id}`, this.palette.text);
		curr.left = this._removeSucc(curr.left, dummy);
		if (curr.left) curr.left.parent = curr;
		return curr;
	}

	// Predecessor of a 2-child node: rightmost node of the left subtree.
	_removePred(curr, dummy) {
		this.highlight(`node-${curr.id}`, this.palette.highlight);
		this.step();
		if (!curr.right) {
			this._setStatus('No right child, this is the predecessor');
			this.step();
			dummy.push(curr.data);
			this._deleteNodeVisual(curr);
			this.step();
			return curr.left;
		}
		this._setStatus('Right child exists, keep going right');
		this.step();
		this.unhighlight(`node-${curr.id}`);
		this.cmd('setForegroundColor', `node-${curr.id}`, this.palette.text);
		curr.right = this._removePred(curr.right, dummy);
		if (curr.right) curr.right.parent = curr;
		return curr;
	}

	// ---- Find ----
	find(val) {
		this._resetAllNodeColors();
		this._setStatus(`Finding ${val}...`);
		this.step();

		let cur = this.root;
		let found = false;
		while (cur) {
			this.highlight(`node-${cur.id}`, this.palette.accent);
			const c = this.compare(val, cur.data);
			if (c === 0) {
				this._setStatus(`${val} = ${cur.data} — found!`);
				this.step();
				this.cmd('setBackgroundColor', `node-${cur.id}`, this.palette.success);
				this.cmd('setForegroundColor', `node-${cur.id}`, '#ffffff');
				found = true;
				break;
			}
			this._setStatus(c < 0 ? `${val} < ${cur.data} → go left` : `${val} > ${cur.data} → go right`);
			this.step();
			this.unhighlight(`node-${cur.id}`);
			this.cmd('setForegroundColor', `node-${cur.id}`, this.palette.text);
			cur = c < 0 ? cur.left : cur.right;
		}
		if (!found) this._setStatus(`${val} not found`);
		this.step();
		this.run();
	}

	// ---- Standalone Predecessor / Successor query (full ancestor-aware) ----
	predecessor(val) {
		this._resetAllNodeColors();
		this._setStatus(`Predecessor of ${val}...`);
		this.step();
		const target = this._findWithAnimation(val);
		if (!target) { this._setStatus(`${val} not found`); this.step(); this.run(); return; }

		const pred = this._predecessorOf(target);
		if (pred) {
			this.cmd('setBackgroundColor', `node-${pred.id}`, this.palette.highlight);
			this.cmd('setForegroundColor', `node-${pred.id}`, '#ffffff');
			this._setStatus(`Predecessor of ${val} is ${pred.data}`);
		} else {
			this._setStatus(`${val} has no predecessor`);
		}
		this.step();
		this.run();
	}

	successor(val) {
		this._resetAllNodeColors();
		this._setStatus(`Successor of ${val}...`);
		this.step();
		const target = this._findWithAnimation(val);
		if (!target) { this._setStatus(`${val} not found`); this.step(); this.run(); return; }

		const succ = this._successorOf(target);
		if (succ) {
			this.cmd('setBackgroundColor', `node-${succ.id}`, this.palette.highlight);
			this.cmd('setForegroundColor', `node-${succ.id}`, '#ffffff');
			this._setStatus(`Successor of ${val} is ${succ.data}`);
		} else {
			this._setStatus(`${val} has no successor`);
		}
		this.step();
		this.run();
	}

	// Shared animated descent used by predecessor()/successor(); returns the found node
	_findWithAnimation(val) {
		let cur = this.root;
		while (cur) {
			this.highlight(`node-${cur.id}`, this.palette.accent);
			const c = this.compare(val, cur.data);
			if (c === 0) { this.step(); this.unhighlight(`node-${cur.id}`); this.cmd('setForegroundColor', `node-${cur.id}`, this.palette.text); return cur; }
			this._setStatus(c < 0 ? `${val} < ${cur.data} → go left` : `${val} > ${cur.data} → go right`);
			this.step();
			this.unhighlight(`node-${cur.id}`);
			this.cmd('setForegroundColor', `node-${cur.id}`, this.palette.text);
			cur = c < 0 ? cur.left : cur.right;
		}
		return null;
	}

	// ---- Traversals ----
	traverse(order) {
		this._resetAllNodeColors();
		this._clearResultRow();
		this.cmd('setText', this.traversalLabelId, '');

		if (!this.root) { this._setStatus('Tree is empty'); this.step(); this.run(); return; }

		if (order === 'level') { this._levelOrder(); return; }

		const label = { pre: 'Pre-order', in: 'In-order', post: 'Post-order' }[order];
		this._setStatus(`${label} traversal`);
		this.step();

		const seq = [];
		const pre = n => { if (!n) return; seq.push(n); pre(n.left); pre(n.right); };
		const inO = n => { if (!n) return; inO(n.left); seq.push(n); inO(n.right); };
		const post = n => { if (!n) return; post(n.left); post(n.right); seq.push(n); };
		if (order === 'pre') pre(this.root);
		else if (order === 'in') inO(this.root);
		else post(this.root);

		seq.forEach((node) => {
			this._setStatus(`Visiting ${node.data}...`);
			this.highlight(`node-${node.id}`, this.palette.accent);
			this.step();
			this._appendResultBox(node.data); // grows the bottom array in real time
			this.step();
			this.unhighlight(`node-${node.id}`);
			this.cmd('setBackgroundColor', `node-${node.id}`, this.palette.success);
			this.cmd('setForegroundColor', `node-${node.id}`, '#ffffff');
		});
		this._setStatus(`${label} complete`);
		this.step();
		this.run();
	}

	// Level-order with an animated on-screen FIFO queue (enqueue/dequeue), as in CS1332
	_levelOrder() {
		this._setStatus('Level-order traversal');
		// Queue sits above the results row so the two never collide
		const queueY = (this.engine.canvas.height || 500) - 90;
		const queueTitleId = this.id();
		this.cmd('createLabel', queueTitleId, 'Queue: ', QUEUE_START_X - 10, queueY - 25);
		this.step();

		const queueNodes = [];
		const queueLabelIds = [];

		const enqueue = (node) => {
			const labelId = this.id();
			this.cmd('createLabel', labelId, String(node.data), node.x, node.y);
			this.cmd('setForegroundColor', labelId, this.palette.highlight);
			this.cmd('setPosition', labelId, QUEUE_START_X + queueNodes.length * QUEUE_SPACING, queueY);
			queueNodes.push(node);
			queueLabelIds.push(labelId);
			this.step();
		};

		enqueue(this.root);

		while (queueNodes.length) {
			const node = queueNodes.shift();
			const labelId = queueLabelIds.shift();

			this._setStatus(`Dequeue ${node.data}, visit it`);
			this.highlight(`node-${node.id}`, this.palette.accent);
			this.cmd('setForegroundColor', labelId, this.palette.success);
			this.step();

			this.cmd('delete', labelId);
			queueLabelIds.forEach((id, i) => this.cmd('setPosition', id, QUEUE_START_X + i * QUEUE_SPACING, queueY));
			this._appendResultBox(node.data); // grows the bottom array in real time
			this.step();

			this.unhighlight(`node-${node.id}`);
			this.cmd('setBackgroundColor', `node-${node.id}`, this.palette.success);
			this.cmd('setForegroundColor', `node-${node.id}`, '#ffffff');

			if (node.left) enqueue(node.left);
			if (node.right) enqueue(node.right);
		}

		this.cmd('delete', queueTitleId);
		this._setStatus('Level-order complete');
		this.step();
		this.run();
	}

	// ---- Random / Clear ----
	randomTree() {
		this.hardReset();
		this.root = null;
		this.nodeMap.clear();
		this.liveNodeIds.clear();
		this.liveEdgeIds.clear();
		this.resultBoxIds = [];
		this.nextNodeId = 0;

		const count = Math.floor(Math.random() * 6) + 6; // 6-11 nodes
		const used = new Set();
		while (used.size < count) used.add(Math.floor(Math.random() * 99) + 1);

		this.statusLabelId = this.id();
		this.traversalLabelId = this.id();
		const cw = this.engine.canvas.width || 800;
		this.cmd('createLabel', this.statusLabelId, '', cw / 2, STATUS_Y);
		this.cmd('createLabel', this.traversalLabelId, '', cw / 2, TRAVERSAL_Y);

		[...used].forEach(v => {
			const node = new BSTNode(String(v), this.nextNodeId++);
			this.nodeMap.set(node.id, node);
			if (!this.root) { this.root = node; return; }
			let cur = this.root;
			while (true) {
				const c = this.compare(node.data, cur.data);
				if (c < 0) { if (!cur.left) { cur.left = node; node.parent = cur; break; } cur = cur.left; }
				else { if (!cur.right) { cur.right = node; node.parent = cur; break; } cur = cur.right; }
			}
		});

		this._resizeAndSync();
		this._setStatus(`Generated random tree (${count} nodes)`);
		this.step();
		this.run();
	}

	clearAll() {
		this.hardReset();
		this.root = null;
		this.nodeMap.clear();
		this.liveNodeIds.clear();
		this.liveEdgeIds.clear();
		this.resultBoxIds = [];
		this.nextNodeId = 0;

		this.statusLabelId = this.id();
		this.traversalLabelId = this.id();
		const cw = this.engine.canvas.width || 800;
		this.cmd('createLabel', this.statusLabelId, 'Cleared', cw / 2, STATUS_Y);
		this.cmd('createLabel', this.traversalLabelId, '', cw / 2, TRAVERSAL_Y);
		this.run();
	}
}

VisualizerRegistry.register('bst', BST);