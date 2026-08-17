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

// ============================================================
// visualizers/algorithms/Algorithm.js
// Base class all algorithm visualizers extend. Wraps command
// queueing + a minimal DOM control builder for the controls panel.
// ============================================================
import { ThemeColors } from '../VisualizerEngine.js';

export default class Algorithm {
	constructor(engine, controlsId) {
		this.engine = engine;
		this.om = engine.objectManager;
		this.nextId = 0;
		this.commands = [];
		this.controls = document.getElementById(controlsId) || null;
	}

	// ---- Command queue helpers ----
	cmd(action, ...args) { this.commands.push([action, ...args]); }
	step() { this.cmd('step'); }

	// Appends this operation's commands to the ONGOING session (existing objects
	// persist) and plays through them. Use hardReset() first if you need a wipe.
	run() {
		this.engine.appendCommands(this.commands);
		this.commands = [];
		this.engine.play();
	}

	// Full wipe: clears every object and animation history. Use for a true reset
	// (e.g. a "Clear" button), not between ordinary operations.
	hardReset() {
		this.commands = [];
		this.engine.loadCommands([]);
	}

	// Resizes the canvas's actual pixel buffer AND pins its CSS display size to
	// match exactly (1:1). Without this, some layout contexts can stretch the
	// canvas's CSS box to a different aspect ratio than its pixel buffer, which
	// distorts every shape drawn on it (circles render as ellipses). Pinning
	// means content can only ever overflow the wrapper's bounds — never scale —
	// so the wrapper's scrollbar is the only thing that ever kicks in.
	resizeCanvas(width, height) {
		const canvas = this.engine.canvas;
		if (width !== undefined) canvas.width = width;
		if (height !== undefined) canvas.height = height;
		canvas.style.width = canvas.width + 'px';
		canvas.style.height = canvas.height + 'px';
	}

	id() { return this.nextId++; }

	// ---- Animation convenience wrappers ----
	highlight(id, color) {
		this.cmd('setHighlight', id, true);
		if (color) this.cmd('setForegroundColor', id, color);
	}
	unhighlight(id) { this.cmd('setHighlight', id, false); }

	// ---- Minimal control-builder (buttons/inputs mount into controlsId) ----
	addTextInput(name, placeholder = '') {
		const input = document.createElement('input');
		input.type = 'text';
		input.className = 'algo-text-input';
		input.placeholder = placeholder;
		this._wrap(name, input);
		return input;
	}

	addButton(label, onClick) {
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'btn btn-primary';
		btn.textContent = label;
		btn.onclick = onClick;
		this._wrap(null, btn);
		return btn;
	}

	addDropdown(name, options, onChange) {
		const select = document.createElement('select');
		options.forEach(([value, label]) => {
			const opt = document.createElement('option');
			opt.value = value; opt.textContent = label;
			select.appendChild(opt);
		});
		select.onchange = (e) => onChange(e.target.value);
		this._wrap(name, select);
		return select;
	}

	shake(el) {
		el?.classList.add('shake-animation');
		setTimeout(() => el?.classList.remove('shake-animation'), 300);
	}

	// ---- Grouped control-builder (visually separated groups w/ dividers) ----
	// Use for control bars with several distinct operations (e.g. BST).
	startGroup(vertical = false) {
		if (!this.controls) return null;
		if (this._groupStarted) {
			const divider = document.createElement('div');
			divider.className = 'algo-divider';
			this.controls.appendChild(divider);
		}
		this._groupStarted = true;
		const group = document.createElement('div');
		group.className = 'algo-group' + (vertical ? ' vertical' : '');
		this.controls.appendChild(group);
		this._activeGroup = group;
		return group;
	}

	addTextInputInline(placeholder = '') {
		const input = document.createElement('input');
		input.type = 'text';
		input.className = 'algo-text-input-inline';
		input.placeholder = placeholder;
		(this._activeGroup || this.controls).appendChild(input);
		return input;
	}

	addButtonInline(label, onClick) {
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.className = 'algo-btn';
		btn.textContent = label;
		btn.onclick = onClick;
		(this._activeGroup || this.controls).appendChild(btn);
		return btn;
	}

	// options: [[value, label], ...]. onChange fires with the newly selected value.
	addRadioList(name, options, onChange, checkedIndex = 0) {
		const wrap = document.createElement('div');
		wrap.className = 'algo-radio-list';
		options.forEach(([value, label], idx) => {
			const row = document.createElement('label');
			row.className = 'algo-radio-row';
			const radio = document.createElement('input');
			radio.type = 'radio';
			radio.name = name;
			radio.value = value;
			if (idx === checkedIndex) radio.checked = true;
			radio.onchange = () => onChange(value);
			row.appendChild(radio);
			row.appendChild(document.createTextNode(label));
			wrap.appendChild(row);
		});
		(this._activeGroup || this.controls).appendChild(wrap);
		return wrap;
	}

	_wrap(labelText, el) {
		if (!this.controls) return;
		const group = document.createElement('div');
		group.className = 'algo-control-group';
		if (labelText) {
			const label = document.createElement('label');
			label.textContent = labelText;
			group.appendChild(label);
		}
		group.appendChild(el);
		this.controls.appendChild(group);
	}

	// Theme accessor for algorithms that need palette colors directly
	get palette() { return ThemeColors.palette(); }
}