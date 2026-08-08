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

// visualizers/algorithms/ArrayList.js
//
// Ported from the original csvistool ArrayList.js to BitBridge's lightweight
// VisualizerEngine, following the CS1332 spec: initial capacity 9, doubling
// on overflow (9 -> 18 -> 36 -> ...). Renders as a single horizontal row —
// never wraps indices onto a second line — and relies on the canvas
// wrapper's horizontal scroll (see styles.css .visualizer-canvas-wrapper)
// once the array is wider than the viewport, rather than reflowing rows.
//
// Slots are fixed-position backing-array cells (matching how a real
// ArrayList's underlying array actually works); shifts during add/remove
// are shown as a value hopping from cell to cell via setText + a highlight
// flash rather than a physical slide, since the engine models the backing
// array's cells as stationary, not the values.
import Algorithm from './Algorithm.js';
import { VisualizerRegistry } from '../VisualizerEngine.js';

const INITIAL_CAPACITY = 9; // CS1332 spec
const SAFETY_CAP = 1152; // 9 * 2^7 — a purely defensive ceiling so runaway clicking can't wedge the page; not a CS1332 rule

const ELEM_SIZE = 50;
const MARGIN = 70;
const ARRAY_START_Y = 100;
const INDEX_LABEL_DY = 34; // offset below each cell for its index number

const STATUS_Y = 20;
const SIZE_LABEL_Y = 44;
const CANVAS_HEIGHT = 200; // compact fixed height — always a single row

export default class ArrayListViz extends Algorithm {
    constructor(engine, controlsId) {
        super(engine, controlsId);
        this._buildInitialState();
        this.setupControls();
    }

    // ---- Layout: single horizontal row, index i always at column i ----
    _slotPos(i) {
        return {
            x: MARGIN + i * ELEM_SIZE + ELEM_SIZE / 2,
            y: ARRAY_START_Y,
        };
    }

    // Canvas only ever grows WIDER (never taller, never wraps rows). The
    // wrapper div handles overflow via horizontal scroll (see styles.css).
    _ensureCanvasFits() {
        const neededWidth = MARGIN * 2 + this.capacity * ELEM_SIZE;
        const canvas = this.engine.canvas;
        const targetW = Math.max(800, neededWidth);
        if (canvas.width !== targetW || canvas.height !== CANVAS_HEIGHT) {
            this.resizeCanvas(targetW, CANVAS_HEIGHT);
            this.engine.objectManager.draw();
        }
    }

    // Creates backing-array slot cells + index labels for [from, to)
    _buildSlots(from, to) {
        for (let i = from; i < to; i++) {
            const { x, y } = this._slotPos(i);
            const rectId = this.id();
            const labelId = this.id();
            this.slotIds[i] = rectId;
            this.slotLabelIds[i] = labelId;
            this.cmd('createRect', rectId, '', ELEM_SIZE, ELEM_SIZE, x, y);
            this.cmd('createLabel', labelId, String(i), x, y + INDEX_LABEL_DY);
            this.cmd('setForegroundColor', labelId, this.palette.highlight);
        }
    }

    _buildInitialState() {
        this.commands = [];
        this.capacity = INITIAL_CAPACITY;
        this.size = 0;
        this.data = [];
        this.slotIds = [];
        this.slotLabelIds = [];

        this.statusLabelId = this.id();
        this.sizeLabelId = this.id();
        const cw = this.engine.canvas.width || 800;
        this.cmd('createLabel', this.statusLabelId, '', cw / 2, STATUS_Y);
        this.cmd('createLabel', this.sizeLabelId, '', cw / 2, SIZE_LABEL_Y);

        this._buildSlots(0, this.capacity);
        this._updateSizeLabelCmd();
        this._ensureCanvasFits();
        this.run();
    }

    // ---- Status / size label helpers ----
    _setStatus(msg) { this.cmd('setText', this.statusLabelId, msg); }
    _updateSizeLabelCmd() {
        this.cmd('setText', this.sizeLabelId, `Size: ${this.size}  /  Capacity: ${this.capacity}`);
    }

    _resetSlotColors() {
        for (let i = 0; i < this.capacity; i++) {
            this.cmd('setHighlight', this.slotIds[i], false);
            this.cmd('setForegroundColor', this.slotIds[i], this.palette.text);
            this.cmd('setBackgroundColor', this.slotIds[i], this.palette.nodeBg);
        }
    }

    // ---- Controls: single toolbar row — inputs, then logically grouped ops ----
    setupControls() {
        // Shared inputs (one Value field, one Index field — reused by both
        // "at Index" operations so there's exactly one of each on screen)
        this.startGroup();
        const valueInput = this.addTextInputInline('Value');
        const indexInput = this.addTextInputInline('Index');
        this._valueInput = valueInput;
        this._indexInput = indexInput;

        // Add operations
        this.startGroup();
        this.addButtonInline('Add Front', () => this._handleAdd(0));
        this.addButtonInline('Add Back', () => this._handleAdd(this.size));
        this.addButtonInline('Add at Index', () => this._handleAdd(parseInt(indexInput.value, 10), true));

        // Remove operations
        this.startGroup();
        this.addButtonInline('Remove Front', () => this._handleRemove(0));
        this.addButtonInline('Remove Back', () => this._handleRemove(this.size - 1));
        this.addButtonInline('Remove at Index', () => this._handleRemove(parseInt(indexInput.value, 10), true));

        // Utility
        this.startGroup();
        this.addButtonInline('Random', () => this.randomFill());
        this.addButtonInline('Clear', () => this.clearAll());
    }

    _handleAdd(index, usesIndexField = false) {
        const valueInput = this._valueInput;
        const indexInput = this._indexInput;
        const value = valueInput.value.trim();
        if (!value) { this.shake(valueInput); this._flashStatus('Enter a value to add.'); return; }
        if (Number.isNaN(index) || index < 0 || index > this.size) {
            if (usesIndexField) this.shake(indexInput);
            this._flashStatus(this.size === 0
                ? 'Index must be 0 when the list is empty.'
                : `Index must be between 0 and ${this.size}.`);
            return;
        }
        if (this.size >= this.capacity && this.capacity >= SAFETY_CAP) {
            this._flashStatus(`Reached the demo safety limit (${SAFETY_CAP}) — cannot add more elements.`);
            return;
        }
        valueInput.value = '';
        if (usesIndexField) indexInput.value = '';
        this.add(value, index);
    }

    _handleRemove(index, usesIndexField = false) {
        const indexInput = this._indexInput;
        if (this.size === 0) { this._flashStatus('Cannot remove from an empty list.'); return; }
        if (Number.isNaN(index) || index < 0 || index >= this.size) {
            if (usesIndexField) this.shake(indexInput);
            this._flashStatus(this.size === 1
                ? 'Index must be 0 when the list has one element.'
                : `Index must be between 0 and ${this.size - 1}.`);
            return;
        }
        if (usesIndexField) indexInput.value = '';
        this.remove(index);
    }

    // Shows a one-off message without a full animated run (validation errors)
    _flashStatus(msg) {
        this.commands = [];
        this._setStatus(msg);
        this.run();
    }

    // ---- Core operation: Add ----
    add(value, index) {
        this.commands = [];
        this._resetSlotColors();
        this._setStatus(`Adding "${value}" at index ${index}...`);
        this.step();

        if (this.size >= this.capacity) {
            this._growCapacity();
        }

        // Shift everything from the end down to `index` one slot to the right
        if (index < this.size) {
            this._setStatus(`Shifting elements right to make room at index ${index}`);
            this.step();
            for (let i = this.size; i > index; i--) {
                this.data[i] = this.data[i - 1];
                this.highlight(this.slotIds[i], this.palette.accent);
                this.cmd('setText', this.slotIds[i], String(this.data[i]));
                this.step();
                this.unhighlight(this.slotIds[i]);
                this.cmd('setForegroundColor', this.slotIds[i], this.palette.text);
            }
        }

        this.data[index] = value;
        this.highlight(this.slotIds[index], this.palette.accent);
        this.cmd('setText', this.slotIds[index], String(value));
        this.step();
        this.unhighlight(this.slotIds[index]);
        this.cmd('setBackgroundColor', this.slotIds[index], this.palette.success);
        this.cmd('setForegroundColor', this.slotIds[index], '#ffffff');

        this.size++;
        this._updateSizeLabelCmd();
        this._setStatus(`Added "${value}" at index ${index}`);
        this.step();
        this.run();
    }

    // ---- Core operation: Remove ----
    remove(index) {
        this.commands = [];
        this._resetSlotColors();
        const removedVal = this.data[index];
        this._setStatus(`Removing index ${index} (value "${removedVal}")...`);
        this.highlight(this.slotIds[index], this.palette.danger);
        this.step();

        this.cmd('setText', this.slotIds[index], '');
        this.unhighlight(this.slotIds[index]);
        this.step();

        if (index < this.size - 1) {
            this._setStatus('Shifting elements left to fill the gap');
            this.step();
            for (let i = index; i < this.size - 1; i++) {
                this.data[i] = this.data[i + 1];
                this.highlight(this.slotIds[i], this.palette.accent);
                this.cmd('setText', this.slotIds[i], String(this.data[i]));
                this.step();
                this.unhighlight(this.slotIds[i]);
                this.cmd('setForegroundColor', this.slotIds[i], this.palette.text);
            }
        }

        this.data.pop();
        this.cmd('setText', this.slotIds[this.size - 1], '');
        this.cmd('setBackgroundColor', this.slotIds[this.size - 1], this.palette.nodeBg);
        this.cmd('setForegroundColor', this.slotIds[this.size - 1], this.palette.text);

        this.size--;
        this._updateSizeLabelCmd();
        this._setStatus(`Removed "${removedVal}" from index ${index}`);
        this.step();
        this.run();
    }

    // ---- Capacity doubling: 9 -> 18 -> 36 -> 72 ... (CS1332 spec) ----
    _growCapacity() {
        const newCapacity = Math.min(this.capacity * 2, SAFETY_CAP);
        this._setStatus(`Capacity full (${this.capacity}) — resizing to ${newCapacity}...`);
        this.step();

        const oldCapacity = this.capacity;
        this.capacity = newCapacity;
        this._ensureCanvasFits();
        this._buildSlots(oldCapacity, newCapacity);
        this._updateSizeLabelCmd();
        this.step();
    }

    // ---- Random fill (direct placement, like BST's randomTree — no per-step narration) ----
    randomFill() {
        this.hardReset();
        this._buildInitialState_noRun();

        const count = Math.floor(Math.random() * 6) + 4; // 4-9 elements
        for (let i = 0; i < count; i++) {
            if (this.size >= this.capacity) {
                const newCapacity = Math.min(this.capacity * 2, SAFETY_CAP);
                if (newCapacity === this.capacity) break; // at SAFETY_CAP
                this.capacity = newCapacity;
                this._buildSlots(this.slotIds.length, this.capacity);
            }
            const value = Math.floor(Math.random() * 50) + 1;
            this.data[this.size] = value;
            this.cmd('setText', this.slotIds[this.size], String(value));
            this.size++;
        }

        this._ensureCanvasFits();
        this._updateSizeLabelCmd();
        this._setStatus(`Generated random list (${this.size} elements)`);
        this.step();
        this.run();
    }

    // Internal variant of _buildInitialState() that queues commands without
    // calling run() itself — used by randomFill()/clearAll() so the initial
    // empty-array setup and the subsequent fill share a single animated run.
    _buildInitialState_noRun() {
        this.commands = [];
        this.capacity = INITIAL_CAPACITY;
        this.size = 0;
        this.data = [];
        this.slotIds = [];
        this.slotLabelIds = [];

        this.statusLabelId = this.id();
        this.sizeLabelId = this.id();
        const cw = this.engine.canvas.width || 800;
        this.cmd('createLabel', this.statusLabelId, '', cw / 2, STATUS_Y);
        this.cmd('createLabel', this.sizeLabelId, '', cw / 2, SIZE_LABEL_Y);
        this._buildSlots(0, this.capacity);
    }

    clearAll() {
        this.hardReset();
        this._buildInitialState_noRun();
        this._updateSizeLabelCmd();
        this._setStatus('Cleared');
        this.step();
        this.run();
    }
}

VisualizerRegistry.register('arraylist', ArrayListViz);