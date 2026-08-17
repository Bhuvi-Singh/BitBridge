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

// visualizers/algorithms/BFS.js
// Breadth-first search, ported from the legacy USF/csvistool architecture to
// BitBridge's VisualizerEngine (this.cmd(...) command-queue + Graph.js base).
//
// Fixes vs. the legacy version:
//  1. Queue "gap" bug: previously queueID[0] jumped to the CURRENT_VERTEX slot
//     immediately, but the shift() + relayout of remaining queue labels didn't
//     happen until the end of the neighbor loop — leaving a visibly empty slot
//     at QUEUE_START_Y while neighbors were being explored. Fixed by doing the
//     shift() and relayout in the SAME step as the move-to-current animation.
//  2. Disconnected graphs: previously just said "Queue is empty, done" with no
//     indication unvisited vertices existed. Now explicitly lists them.
//  3. No hardcoded pseudocode-line highlight() calls tied to pseudocode.json
//     line indices — that whole mechanism doesn't exist in VisualizerEngine.
//     Pseudocode display instead goes through the same ALGO_INFO panel path
//     BubbleSort/BST/ArrayList already use (see app.js ALGO_INFO['bfs']).
import Graph from './Graph.js';
import { VisualizerRegistry } from '../VisualizerEngine.js';

const VISITED_START_X = 30;
const VISITED_START_Y = 0; // set relative to canvas bottom at render time
const LIST_SPACING = 22;

const QUEUE_START_X = 30;
const QUEUE_SPACING = 50;

const CURRENT_VERTEX_LABEL_TEXT = 'Current: ';

export default class BFS extends Graph {
	constructor(engine, controlsId) {
		super(engine, controlsId);
	}

	addControls() {
		this.startGroup();
		this.startField = this.addTextInputInline('Start vertex (e.g. A)');
		this.addButtonInline('Run BFS', () => this.startCallback());
		super.addControls();

		this.startGroup(true);
		this.visitedTitleId = null;
		this.queueTitleId = null;
		this.currentLabelId = null;
	}

	startCallback() {
		const raw = this.startField.value.trim();
		if (!raw) { this.shake(this.startField); return; }
		this.startField.value = '';
		this.implementAction(this.doBFS.bind(this), raw.toUpperCase());
	}

	// Persistent row labels (Visited / Current / Queue) — created once per run.
	_setupRowLabels() {
		const ch = this.engine.canvas.height || 500;
		const visitedY = ch - 90;
		const currentY = ch - 60;
		const queueY = ch - 30;

		this.visitedTitleId = this.id();
		this.cmd('createLabel', this.visitedTitleId, 'Visited: ', VISITED_START_X - 10, visitedY);
		this.currentLabelId = this.id();
		this.cmd('createLabel', this.currentLabelId, CURRENT_VERTEX_LABEL_TEXT, QUEUE_START_X - 10, currentY);
		this.queueTitleId = this.id();
		this.cmd('createLabel', this.queueTitleId, 'Queue: ', QUEUE_START_X - 10, queueY);

		this._visitedY = visitedY;
		this._currentY = currentY;
		this._queueY = queueY;
	}

	doBFS(startValue) {
		const startVertex = startValue.charCodeAt(0) - 65;
		if (startVertex < 0 || startVertex >= this.size) {
			this._setStatus(`"${startValue}" is not a vertex in this graph`);
			this.shake(this.startField);
			this.step();
			return;
		}

		this.rebuildEdges();
		this._setupRowLabels();

		const visited = new Array(this.size).fill(false);
		const visitedLabelIds = [];
		const queue = [];
		const queueLabelIds = [];

		const enqueue = (v) => {
			queue.push(v);
			const id = this.id();
			this.cmd('createLabel', id, this.toStr(v), QUEUE_START_X + (queue.length - 1) * QUEUE_SPACING, this._queueY);
			queueLabelIds.push(id);
		};
		const markVisited = (v) => {
			visited[v] = true;
			const id = this.id();
			this.cmd('createLabel', id, this.toStr(v), VISITED_START_X + visitedLabelIds.length * LIST_SPACING, this._visitedY);
			visitedLabelIds.push(id);
			this.cmd('setBackgroundColor', this.circleID[v], this.palette.success);
			this.cmd('setForegroundColor', this.circleID[v], '#ffffff');
		};

		this._setStatus(`Enqueueing ${this.toStr(startVertex)} and marking visited`);
		markVisited(startVertex);
		enqueue(startVertex);
		this.step();

		while (queue.length > 0) {
			// FIX (bug #1): shift the queue's underlying array AND relayout the
			// remaining labels in the same step as moving the head to "Current" —
			// no more one-step window where slot 0 is visually empty.
			const vertex = queue.shift();
			const headLabelId = queueLabelIds.shift();

			this._setStatus(`Dequeuing ${this.toStr(vertex)}`);
			this.cmd('setText', this.currentLabelId, CURRENT_VERTEX_LABEL_TEXT + this.toStr(vertex));
			this.cmd('delete', headLabelId);
			queueLabelIds.forEach((id, i) => this.cmd('setPosition', id, QUEUE_START_X + i * QUEUE_SPACING, this._queueY));
			this.visitVertex(vertex);
			this.step();

			for (let neighbor = 0; neighbor < this.size; neighbor++) {
				if (this.adj_matrix[vertex][neighbor] <= 0) continue;

				this.highlightEdge(vertex, neighbor, true);
				this._setStatus(`Checking neighbor ${this.toStr(neighbor)} of ${this.toStr(vertex)}`);
				this.step();

				if (!visited[neighbor]) {
					this._setStatus(`${this.toStr(neighbor)} not yet visited — enqueueing`);
					markVisited(neighbor);
					enqueue(neighbor);
					this.step();
				} else {
					this._setStatus(`${this.toStr(neighbor)} already visited — skipping`);
					this.step();
				}
				this.highlightEdge(vertex, neighbor, false);
			}

			this.leaveVertex(vertex);
			this.cmd('setBackgroundColor', this.circleID[vertex], this.palette.success);
			this.cmd('setForegroundColor', this.circleID[vertex], '#ffffff');
		}

		this.cmd('setText', this.currentLabelId, CURRENT_VERTEX_LABEL_TEXT);

		// FIX (bug #2): explicitly call out unreachable vertices instead of a
		// silent/ambiguous "done".
		const unreached = [];
		for (let i = 0; i < this.size; i++) if (!visited[i]) unreached.push(this.toStr(i));

		if (unreached.length === 0) {
			this._setStatus('All vertices visited — BFS complete');
		} else {
			this._setStatus(`Queue is empty. Unreachable vertices remaining: ${unreached.join(', ')}`);
		}
		this.step();
	}
}

VisualizerRegistry.register('bfs', BFS);