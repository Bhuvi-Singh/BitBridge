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
// Binary Search Tree: Insert, Delete, Find, Predecessor, Successor,
// Traversals (Pre/In/Post/Level-order), Random, Clear.
// All operations are always-visible buttons (no dropdown-triggered ops).

import Algorithm from './Algorithm.js';
import { VisualizerRegistry } from '../VisualizerEngine.js';

const LEVEL_HEIGHT = 80;
const TOP_Y = 60;
const STATUS_Y = 20;

export default class BST extends Algorithm {
	constructor(engine, controlsId) {
		super(engine, controlsId);
		this.root = null;
		this.nodeMap = new Map();
		this.nextNodeId = 0;
		this.setupControls();
	}

	setupControls() {
		const valInput = this.addTextInput('Value', 'e.g., 50');
		const readVal = () => {
			const v = parseInt(valInput.value);
			if (isNaN(v)) { this.shake(valInput); return null; }
			return v;
		};

		this.addButton('Insert', () => { const v = readVal(); if (v !== null) { this.insert(v); valInput.value = ''; } });
		this.addButton('Delete', () => { const v = readVal(); if (v !== null) { this.deleteVal(v); valInput.value = ''; } });
		this.addButton('Find', () => { const v = readVal(); if (v !== null) this.find(v); });
		this.addButton('Predecessor', () => { const v = readVal(); if (v !== null) this.predecessor(v); });
		this.addButton('Successor', () => { const v = readVal(); if (v !== null) this.successor(v); });
		this.addButton('Pre-order', () => this.traverse('pre'));
		this.addButton('In-order', () => this.traverse('in'));
		this.addButton('Post-order', () => this.traverse('post'));
		this.addButton('Level-order', () => this.traverse('level'));
		this.addButton('Random', () => this.randomTree());
		this.addButton('Clear', () => this.clearAll());
	}

	// ---- Tree structure helpers ----
	_makeNode(val) {
		const node = { val, left: null, right: null, id: this.nextNodeId++ };
		this.nodeMap.set(node.id, node);
		return node;
	}

	_insertVal(val) {
		if (!this.root) { this.root = this._makeNode(val); return this.root.id; }
		let cur = this.root;
		while (true) {
			if (val === cur.val) return cur.id;
			if (val < cur.val) {
				if (!cur.left) { cur.left = this._makeNode(val); return cur.left.id; }
				cur = cur.left;
			} else {
				if (!cur.right) { cur.right = this._makeNode(val); return cur.right.id; }
				cur = cur.right;
			}
		}
	}

	_deleteNode(node, val) {
		if (!node) return null;
		if (val < node.val) node.left = this._deleteNode(node.left, val);
		else if (val > node.val) node.right = this._deleteNode(node.right, val);
		else {
			if (!node.left) return node.right;
			if (!node.right) return node.left;
			let minRight = node.right;
			while (minRight.left) minRight = minRight.left;
			node.val = minRight.val;
			node.right = this._deleteNode(node.right, minRight.val);
		}
		return node;
	}

	_searchPath(val) {
		const path = [];
		let cur = this.root;
		let found = false;
		while (cur) {
			path.push(cur.id);
			if (val === cur.val) { found = true; break; }
			cur = val < cur.val ? cur.left : cur.right;
		}
		return { path, found };
	}

	_collectAll(node, nodeIds = [], edgeIds = []) {
		if (!node) return { nodeIds, edgeIds };
		nodeIds.push(node.id);
		if (node.left) { edgeIds.push(`edge-${node.id}-l`); this._collectAll(node.left, nodeIds, edgeIds); }
		if (node.right) { edgeIds.push(`edge-${node.id}-r`); this._collectAll(node.right, nodeIds, edgeIds); }
		return { nodeIds, edgeIds };
	}

	_layout(node, x, y, offset) {
		if (!node) return;
		node.x = x; node.y = y;
		if (node.left) this._layout(node.left, x - offset, y + LEVEL_HEIGHT, Math.max(30, offset / 1.7));
		if (node.right) this._layout(node.right, x + offset, y + LEVEL_HEIGHT, Math.max(30, offset / 1.7));
	}

	// ---- Drawing ----
	_drawAll(node) {
		if (!node) return;
		if (node.left) {
			this.cmd('createLine', `edge-${node.id}-l`, node.x, node.y, node.left.x, node.left.y, this.palette.muted);
			this._drawAll(node.left);
		}
		if (node.right) {
			this.cmd('createLine', `edge-${node.id}-r`, node.x, node.y, node.right.x, node.right.y, this.palette.muted);
			this._drawAll(node.right);
		}
		this.cmd('createCircle', `node-${node.id}`, String(node.val), node.x, node.y);
	}

	_renderTree() {
		if (this.root) {
			const canvasWidth = this.engine.canvas.width || 800;
			this._layout(this.root, canvasWidth / 2, TOP_Y, Math.max(80, canvasWidth / 5));
			this._drawAll(this.root);
		}
	}

	_status(msg) {
		const id = this.id();
		this.cmd('createLabel', id, msg, (this.engine.canvas.width || 800) / 2, STATUS_Y);
	}

	_highlightPathThenReset(path, color) {
		path.forEach(id => {
			this.highlight(`node-${id}`, color);
			this.step();
			this.unhighlight(`node-${id}`);
			this.cmd('setForegroundColor', `node-${id}`, this.palette.text);
		});
	}

	// ---- Operations ----
	insert(val) {
		this.clearCanvas();
		const { path } = this._searchPath(val);
		// Draw existing tree first so we can animate the descent
		this._renderTree();
		this._status(`Insert ${val}`);
		this.step();
		this._highlightPathThenReset(path, this.palette.accent);

		const newId = this._insertVal(val);
		this._renderTree(); // relayout/redraw including the new node
		this.cmd('setBackgroundColor', `node-${newId}`, this.palette.success);
		this.cmd('setForegroundColor', `node-${newId}`, '#ffffff');
		this.step();
		this.run();
	}

	deleteVal(val) {
		this.clearCanvas();
		const { path, found } = this._searchPath(val);
		this._renderTree();
		this._status(`Delete ${val}`);
		this.step();
		this._highlightPathThenReset(path, this.palette.accent);

		if (!found) {
			this._status(`${val} not found`);
			this.step();
			this.run();
			return;
		}

		const { nodeIds, edgeIds } = this._collectAll(this.root);
		this.root = this._deleteNode(this.root, val);
		nodeIds.forEach(id => this.cmd('delete', `node-${id}`));
		edgeIds.forEach(id => this.cmd('delete', id));
		this._renderTree();
		this._status(`Deleted ${val}`);
		this.step();
		this.run();
	}

	find(val) {
		this.clearCanvas();
		const { path, found } = this._searchPath(val);
		this._renderTree();
		this._status(`Find ${val}`);
		this.step();
		this._highlightPathThenReset(path, this.palette.accent);

		const lastId = path[path.length - 1];
		if (lastId !== undefined) {
			this.cmd('setBackgroundColor', `node-${lastId}`, found ? this.palette.success : this.palette.danger);
			this.cmd('setForegroundColor', `node-${lastId}`, '#ffffff');
		}
		this._status(found ? `Found ${val}` : `${val} not found`);
		this.step();
		this.run();
	}

	predecessor(val) {
		this.clearCanvas();
		const { path, found } = this._searchPath(val);
		this._renderTree();
		this._status(`Predecessor of ${val}`);
		this.step();
		this._highlightPathThenReset(path, this.palette.accent);

		if (!found) { this._status(`${val} not found`); this.step(); this.run(); return; }
		const target = this.nodeMap.get(path[path.length - 1]);
		let pred = null;
		if (target.left) {
			pred = target.left;
			while (pred.right) pred = pred.right;
		}
		if (pred) {
			this.cmd('setBackgroundColor', `node-${pred.id}`, this.palette.highlight);
			this.cmd('setForegroundColor', `node-${pred.id}`, '#ffffff');
			this._status(`Predecessor: ${pred.val}`);
		} else {
			this._status('No predecessor');
		}
		this.step();
		this.run();
	}

	successor(val) {
		this.clearCanvas();
		const { path, found } = this._searchPath(val);
		this._renderTree();
		this._status(`Successor of ${val}`);
		this.step();
		this._highlightPathThenReset(path, this.palette.accent);

		if (!found) { this._status(`${val} not found`); this.step(); this.run(); return; }
		const target = this.nodeMap.get(path[path.length - 1]);
		let succ = null;
		if (target.right) {
			succ = target.right;
			while (succ.left) succ = succ.left;
		}
		if (succ) {
			this.cmd('setBackgroundColor', `node-${succ.id}`, this.palette.highlight);
			this.cmd('setForegroundColor', `node-${succ.id}`, '#ffffff');
			this._status(`Successor: ${succ.val}`);
		} else {
			this._status('No successor');
		}
		this.step();
		this.run();
	}

	traverse(order) {
		this.clearCanvas();
		if (!this.root) { this._status('Tree is empty'); this.step(); this.run(); return; }

		const seq = [];
		const pre = n => { if (!n) return; seq.push(n); pre(n.left); pre(n.right); };
		const inO = n => { if (!n) return; inO(n.left); seq.push(n); inO(n.right); };
		const post = n => { if (!n) return; post(n.left); post(n.right); seq.push(n); };
		const level = () => {
			const q = [this.root];
			while (q.length) { const n = q.shift(); seq.push(n); if (n.left) q.push(n.left); if (n.right) q.push(n.right); }
		};
		if (order === 'pre') pre(this.root);
		else if (order === 'in') inO(this.root);
		else if (order === 'post') post(this.root);
		else level();

		this._renderTree();
		const labelId = this.id();
		const label = { pre: 'Pre-order', in: 'In-order', post: 'Post-order', level: 'Level-order' }[order];
		this.cmd('createLabel', labelId, `${label}: `, (this.engine.canvas.width || 800) / 2, STATUS_Y);
		this.step();

		let text = `${label}: `;
		seq.forEach((node, idx) => {
			this.highlight(`node-${node.id}`, this.palette.accent);
			text += (idx > 0 ? ', ' : '') + node.val;
			this.cmd('setText', labelId, text);
			this.step();
			this.unhighlight(`node-${node.id}`);
			this.cmd('setForegroundColor', `node-${node.id}`, this.palette.text);
			this.cmd('setBackgroundColor', `node-${node.id}`, this.palette.success);
			this.cmd('setForegroundColor', `node-${node.id}`, '#ffffff');
		});
		this.step();
		this.run();
	}

	randomTree() {
		this.clearCanvas();
		this.root = null;
		this.nodeMap.clear();
		this.nextNodeId = 0;

		const count = Math.floor(Math.random() * 6) + 6; // 6-11 nodes
		const used = new Set();
		while (used.size < count) used.add(Math.floor(Math.random() * 99) + 1);
		[...used].forEach(v => this._insertVal(v));

		this._renderTree();
		this._status(`Random tree (${count} nodes)`);
		this.step();
		this.run();
	}

	clearAll() {
		this.clearCanvas();
		this.root = null;
		this.nodeMap.clear();
		this.nextNodeId = 0;
		this.run();
	}
}

VisualizerRegistry.register('bst', BST);