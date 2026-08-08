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

// visualizers/algorithms/BubbleSort.js
// CS1332 optimized bubble sort: early-termination (swapped flag) + shrinking
// bounds (each pass guarantees the last `end` elements are sorted, so the
// inner loop's upper bound shrinks by 1 every pass).
import Algorithm from './Algorithm.js';
import { VisualizerRegistry } from '../VisualizerEngine.js';

const MAX_SIZE = 18;
const ARRAY_START_Y = 130;
const MIN_ELEM = 44;
const MAX_ELEM = 72;
const MARGIN = 60;
const COMPARE_BLUE = '#3b82f6';

export default class BubbleSort extends Algorithm {
	constructor(engine, controlsId) {
		super(engine, controlsId);
		this.arrayData = [];
		this.displayData = [];
		this.compCount = 0;
		this.swapCount = 0;
		this.arrayIds = [];
		this.indexLabelIds = [];
		this.elemSize = 60;
		this.setupControls();
	}

	setupControls() {
		const listInput = this.addTextInput('Array', 'e.g., 5,2,8,1,9');
		this.addDropdown('Example', [
			['', 'Load Example...'],
			['sorted', 'Sorted: 1,2,3,4,5'],
			['reverse', 'Reverse: 5,4,3,2,1'],
			['random', 'Random'],
		], (sel) => {
			let vals = '';
			if (sel === 'sorted') vals = '1,2,3,4,5,6,7,8,9';
			else if (sel === 'reverse') vals = '9,8,7,6,5,4,3,2,1';
			else if (sel === 'random') {
				const sz = Math.floor(Math.random() * 9) + 5;
				for (let i = 0; i < sz; i++) {
					vals += Math.floor(Math.random() * 15) + 1;
					if (i < sz - 1) vals += ',';
				}
			}
			if (vals) listInput.value = vals;
		});
		this.addButton('Sort', () => {
			// Sanitize: tolerate trailing/doubled commas, stray whitespace, and
			// non-numeric junk (e.g. "1,2,,3," or " 4 , 5 ,,6") without erroring.
			const input = listInput.value.split(/,+/).map(x => x.trim()).filter(x => x);
			if (!input.length) { this.shake(listInput); return; }
			const nums = input.map(Number).filter(x => !isNaN(x));
			if (!nums.length) { this.shake(listInput); return; }
			this.sort(nums);
		});
		this.addButton('Clear', () => this.clearAll());
	}

	// Reset a slot's colors to the default (non-highlighted) state
	resetColor(id) {
		this.cmd('setForegroundColor', id, this.palette.text);
		this.cmd('setBackgroundColor', id, this.palette.nodeBg);
	}

	sort(list) {
		this.hardReset();
		this.arrayData = list.slice(0, MAX_SIZE);
		this.arrayIds = [];
		this.indexLabelIds = [];
		this.compCount = 0;
		this.swapCount = 0;
		this.displayData = [...this.arrayData];

		// Pick a readable box size (never below MIN_ELEM), then grow the canvas
		// to fit — previously MIN_ELEM could override the fit calculation and
		// force boxes wider than the fixed canvas, clipping the array off-screen.
		const baselineWidth = 800;
		this.elemSize = Math.max(MIN_ELEM, Math.min(MAX_ELEM,
			Math.floor((baselineWidth - MARGIN * 2) / this.arrayData.length)));
		const neededWidth = MARGIN * 2 + this.arrayData.length * this.elemSize;
		this.resizeCanvas(Math.max(baselineWidth, neededWidth), this.engine.canvas.height);
		const startX = MARGIN + this.elemSize / 2;

		for (let i = 0; i < this.arrayData.length; i++) {
			const id = this.id();
			this.arrayIds.push(id);
			const x = startX + i * this.elemSize;
			this.cmd('createRect', id, String(this.arrayData[i]), this.elemSize, this.elemSize, x, ARRAY_START_Y);

			// 0-based index label below each cell (stays fixed — it labels the
			// position, not the value, since swaps move values not slots)
			const labelId = this.id();
			this.cmd('createLabel', labelId, String(i), x, ARRAY_START_Y + this.elemSize / 2 + 18);
			this.cmd('setForegroundColor', labelId, this.palette.muted);
			this.indexLabelIds.push(labelId);
		}
		this.step();

		let sorted = false;
		let end = this.arrayData.length - 1; // shrinking upper bound

		while (!sorted) {
			sorted = true; // early-termination flag
			for (let i = 0; i < end; i++) {
				this.compCount++;
				// Compare: blue, only the two elements under comparison, only for this step
				this.highlight(this.arrayIds[i], COMPARE_BLUE);
				this.highlight(this.arrayIds[i + 1], COMPARE_BLUE);
				this.step();

				if (this.arrayData[i] > this.arrayData[i + 1]) {
					this.swap(i, i + 1);
					sorted = false;
				}

				// Always fully reset color after comparing (fixes lingering highlight color)
				this.unhighlight(this.arrayIds[i]);
				this.unhighlight(this.arrayIds[i + 1]);
				this.resetColor(this.arrayIds[i]);
				this.resetColor(this.arrayIds[i + 1]);
			}
			end--; // shrink bound: last element of this pass is now guaranteed sorted
		}

		// Mark as sorted: green background, white text for contrast
		for (const id of this.arrayIds) {
			this.cmd('setBackgroundColor', id, this.palette.success);
			this.cmd('setForegroundColor', id, '#ffffff');
		}
		this.step();
		this.run();
	}

	swap(i, j) {
		this.swapCount++;
		[this.arrayData[i], this.arrayData[j]] = [this.arrayData[j], this.arrayData[i]];
		[this.displayData[i], this.displayData[j]] = [this.displayData[j], this.displayData[i]];

		this.cmd('setText', this.arrayIds[i], String(this.displayData[i]));
		this.cmd('setText', this.arrayIds[j], String(this.displayData[j]));
		// Swap: red/orange
		this.cmd('setForegroundColor', this.arrayIds[i], this.palette.danger);
		this.cmd('setForegroundColor', this.arrayIds[j], this.palette.danger);
		this.step();
		// Color gets reset to default right after by the caller (sort loop)
	}

	clearAll() {
		this.hardReset();
		this.arrayData = [];
		this.arrayIds = [];
		this.indexLabelIds = [];
		this.compCount = 0;
		this.swapCount = 0;
		this.run();
	}
}

VisualizerRegistry.register('bubble-sort', BubbleSort);