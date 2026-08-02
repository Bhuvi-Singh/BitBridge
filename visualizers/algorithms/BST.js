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
// Binary Search Tree visualization: Insert, Delete, Search operations.

import Algorithm from './Algorithm.js';
import { VisualizerRegistry } from '../core/VisualizerEngine.js';

const NODE_RADIUS = 20;
const LEVEL_HEIGHT = 80;
const H_GAP = 60;

export default class BST extends Algorithm {
	constructor(engine, controlsId) {
		super(engine, controlsId);
		this.root = null;
		this.nodeMap = new Map(); // id -> node data
		this.nextNodeId = 0;
		this.setupControls();
	}

	setupControls() {
		const valInput = this.addTextInput('Value', 'e.g., 50');

		this.addDropdown('Operation', [
			['', 'Select...'],
			['insert', 'Insert'],
			['delete', 'Delete'],
			['search', 'Search'],
		], (op) => {
			if (!op) return;
			const val = parseInt(valInput.value);
			if (isNaN(val)) { this.shake(valInput); return; }

			if (op === 'insert') this.insert(val);
			else if (op === 'delete') this.delete(val);
			else if (op === 'search') this.search(val);

			valInput.value = '';
		});

		this.addButton('Clear', () => {
			this.clearCanvas();
			this.root = null;
			this.nodeMap.clear();
			this.nextNodeId = 0;
			this.run();
		});
	}

	insert(val) {
		this.clearCanvas();

		if (!this.root) {
			this.root = { val, left: null, right: null, id: this.nextNodeId++ };
			this.nodeMap.set(this.root.id, this.root);
		} else {
			this._insertNode(this.root, val);
		}

		this.render();
	}

	_insertNode(node, val) {
		if (val < node.val) {
			if (node.left) this._insertNode(node.left, val);
			else {
				node.left = { val, left: null, right: null, id: this.nextNodeId++ };
				this.nodeMap.set(node.left.id, node.left);
			}
		} else if (val > node.val) {
			if (node.right) this._insertNode(node.right, val);
			else {
				node.right = { val, left: null, right: null, id: this.nextNodeId++ };
				this.nodeMap.set(node.right.id, node.right);
			}
		}
	}

	delete(val) {
		this.clearCanvas();
		if (this.root) {
			this.root = this._deleteNode(this.root, val);
		}
		this.render();
	}

	_deleteNode(node, val) {
		if (!node) return null;

		if (val < node.val) {
			node.left = this._deleteNode(node.left, val);
		} else if (val > node.val) {
			node.right = this._deleteNode(node.right, val);
		} else {
			if (!node.left) return node.right;
			if (!node.right) return node.left;

			let minRight = node.right;
			while (minRight.left) minRight = minRight.left;
			node.val = minRight.val;
			node.right = this._deleteNode(node.right, minRight.val);
		}
		return node;
	}

	search(val) {
		this.clearCanvas();
		this._searchNode(this.root, val);
		this.render();
	}

	_searchNode(node, val) {
		if (!node) return false;

		if (val === node.val) {
			node.found = true;
			return true;
		} else if (val < node.val) {
			return this._searchNode(node.left, val);
		} else {
			return this._searchNode(node.right, val);
		}
	}

	render() {
		if (!this.root) { this.run(); return; }

		this.nodePositions = {};
		this._layoutTree(this.root, 400, 30, 150);
		this._drawTree(this.root);
		this.step();
		this.run();
	}

	_layoutTree(node, x, y, offset) {
		if (!node) return;

		node.x = x;
		node.y = y;
		this.nodePositions[node.id] = { x, y };

		if (node.left) {
			this._layoutTree(node.left, x - offset, y + LEVEL_HEIGHT, Math.floor(offset / 2));
		}
		if (node.right) {
			this._layoutTree(node.right, x + offset, y + LEVEL_HEIGHT, Math.floor(offset / 2));
		}
	}

	_drawTree(node) {
		if (!node) return;

		// Draw edges first
		if (node.left) {
			this.cmd('createLine', `edge-${node.id}-l`, node.x, node.y, node.left.x, node.left.y, this.palette.muted);
			this._drawTree(node.left);
		}
		if (node.right) {
			this.cmd('createLine', `edge-${node.id}-r`, node.x, node.y, node.right.x, node.right.y, this.palette.muted);
			this._drawTree(node.right);
		}

		// Draw node
		const circleId = `node-${node.id}`;
		const color = node.found ? this.palette.success : this.palette.nodeBg;
		this.cmd('createCircle', circleId, String(node.val), node.x, node.y);
		this.cmd('setBackgroundColor', circleId, color);
	}
}

VisualizerRegistry.register('bst', BST);