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
// THIS SOFTWARE IS PROVIDED BY David Galles ``AS IS'' AND ANY EXPRESS OR IMPLIED
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
import Algorithm from './Algorithm.js';
import { VisualizerRegistry } from '../VisualizerEngine.js';

const MAX_SIZE = 18;
const ARRAY_START_Y = 130;
const MIN_ELEM = 44;
const MAX_ELEM = 72;
const MARGIN = 60;

export default class BubbleSort extends Algorithm {
	constructor(engine, controlsId) {
		super(engine, controlsId);
		this.arrayData = [];
		this.displayData = [];
		this.compCount = 0;
		this.swapCount = 0;
		this.arrayIds = [];
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
			const input = listInput.value.split(',').map(x => x.trim()).filter(x => x);
			if (!input.length) { this.shake(listInput); return; }
			this.sort(input.map(Number).filter(x => !isNaN(x)));
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
		const canvas = this.engine.canvas;
		canvas.width = Math.max(baselineWidth, neededWidth);
		const startX = MARGIN + this.elemSize / 2;

		for (let i = 0; i < this.arrayData.length; i++) {
			const id = this.id();
			this.arrayIds.push(id);
			const x = startX + i * this.elemSize;
			this.cmd('createRect', id, String(this.arrayData[i]), this.elemSize, this.elemSize, x, ARRAY_START_Y);
		}
		this.step();

		let sorted = false;
		let end = this.arrayData.length - 1;

		while (!sorted) {
			sorted = true;
			for (let i = 0; i < end; i++) {
				this.compCount++;
				// Only the two compared elements turn orange, only for this step
				this.highlight(this.arrayIds[i], this.palette.accent);
				this.highlight(this.arrayIds[i + 1], this.palette.accent);
				this.step();

				if (this.arrayData[i] > this.arrayData[i + 1]) {
					this.swap(i, i + 1);
					sorted = false;
				}

				// Always fully reset color after comparing (fixes lingering orange text)
				this.unhighlight(this.arrayIds[i]);
				this.unhighlight(this.arrayIds[i + 1]);
				this.resetColor(this.arrayIds[i]);
				this.resetColor(this.arrayIds[i + 1]);
			}
			end--;
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
		this.cmd('setForegroundColor', this.arrayIds[i], this.palette.danger);
		this.cmd('setForegroundColor', this.arrayIds[j], this.palette.danger);
		this.step();
		// Color gets reset to default right after by the caller (sort loop)
	}

	clearAll() {
		this.hardReset();
		this.arrayData = [];
		this.arrayIds = [];
		this.compCount = 0;
		this.swapCount = 0;
		this.run();
	}
}

VisualizerRegistry.register('bubble-sort', BubbleSort);