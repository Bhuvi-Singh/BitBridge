// ============================================================
// visualizers/VisualizerEngine.js
// Framework-free canvas animation engine (replaces AnimationMain
// + ObjectManager). Command-driven: algorithms push [action, ...args]
// tuples; engine plays them back with lerped motion between steps.
// ============================================================

// ---- Theme binding: pull live values from CSS variables ----
const ThemeColors = {
  cache: {},
  get(varName, fallback) {
    if (!this.cache[varName]) {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      this.cache[varName] = v || fallback;
    }
    return this.cache[varName];
  },
  refresh() {
    this.cache = {};
  },
  // Semantic palette used by all animated objects/algorithms
  palette() {
    return {
      nodeBg: this.get("--bg-card", "#ffffff"),
      nodeBorder: this.get("--border-color", "#f1dfd0"),
      text: this.get("--text-main", "#2d3748"),
      muted: this.get("--text-muted", "#475569"),
      highlight: this.get("--color-teal", "#1C7E9C"),
      accent: this.get("--primary-accent", "#FEA983"),
      success: "#2ECC71",
      danger: "#ef4444",
    };
  },
};

// ---- Animated object model (rect, circle, label, line, highlight-circle) ----
class AnimatedObject {
  constructor(id, type, props = {}) {
    const p = ThemeColors.palette();
    Object.assign(
      this,
      {
        id,
        type,
        x: 0,
        y: 0,
        toX: 0,
        toY: 0,
        w: 50,
        h: 50,
        r: 20,
        text: "",
        fg: p.text,
        bg: p.nodeBg,
        border: p.nodeBorder,
        alpha: 1,
        highlighted: false,
        alwaysOnTop: false,
        visible: true,
        layer: 0,
        edgeTo: null, // for lines: {toId, thickness, color}
      },
      props,
    );
  }

  draw(ctx) {
    if (!this.visible) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = this.highlighted
      ? ThemeColors.palette().highlight
      : this.border;
    ctx.fillStyle = this.bg;
    ctx.lineWidth = this.highlighted ? 3 : 1.5;

    switch (this.type) {
      case "rect":
        ctx.fillRect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        ctx.strokeRect(
          this.x - this.w / 2,
          this.y - this.h / 2,
          this.w,
          this.h,
        );
        break;
      case "circle":
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;
      case "highlightCircle":
        ctx.beginPath();
        ctx.strokeStyle = this.fg;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case "line":
        ctx.strokeStyle = this.fg;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.toX2 ?? this.toX, this.toY2 ?? this.toY);
        ctx.stroke();
        break;
      case "label":
        break; // text drawn below for all types
      default:
        break;
    }

    if (this.type !== "line" && this.text) {
      ctx.fillStyle = this.fg;
      ctx.font = "700 16px inherit, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.text, this.x, this.y);
    }
    ctx.restore();
  }
}

// ---- ObjectManager: owns all AnimatedObjects, draws each frame ----
class ObjectManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.objects = new Map();
  }

  clear() {
    this.objects.clear();
  }

  draw() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const all = [...this.objects.values()].sort((a, b) => a.layer - b.layer);
    all
      .filter((o) => !o.highlighted && !o.alwaysOnTop)
      .forEach((o) => o.draw(ctx));
    all
      .filter((o) => o.highlighted && !o.alwaysOnTop)
      .forEach((o) => o.draw(ctx));
    all.filter((o) => o.alwaysOnTop).forEach((o) => o.draw(ctx));
  }

  get(id) {
    return this.objects.get(id);
  }
  snapshot() {
    return new Map([...this.objects].map(([k, v]) => [k, { ...v }]));
  }
  restore(snap) {
    this.objects = new Map(
      [...snap].map(([k, v]) => [
        k,
        Object.assign(new AnimatedObject(v.id, v.type), v),
      ]),
    );
  }

  // ---- Command handlers (dispatched by engine as objectManager[action](...)) ----
  createRect(id, text, w, h, x, y) {
    this.objects.set(
      id,
      new AnimatedObject(id, "rect", { text, w, h, x, y, toX: x, toY: y }),
    );
  }
  createCircle(id, text, x, y, r = 20) {
    this.objects.set(
      id,
      new AnimatedObject(id, "circle", { text, x, y, toX: x, toY: y, r }),
    );
  }
  createLabel(id, text, x, y) {
    this.objects.set(
      id,
      new AnimatedObject(id, "label", { text, x, y, toX: x, toY: y }),
    );
  }
  createHighlightCircle(id, color, x, y) {
    this.objects.set(
      id,
      new AnimatedObject(id, "highlightCircle", {
        fg: color,
        x,
        y,
        toX: x,
        toY: y,
        alwaysOnTop: true,
      }),
    );
  }
  createLine(id, x1, y1, x2, y2, color) {
    this.objects.set(
      id,
      new AnimatedObject(id, "line", {
        x: x1,
        y: y1,
        toX: x1,
        toY: y1,
        toX2: x2,
        toY2: y2,
        fg: color || ThemeColors.palette().muted,
        layer: -1,
      }),
    );
  }
  // Reposition BOTH endpoints of an existing line (used when connected nodes move, e.g. tree re-layout)
  updateLine(id, x1, y1, x2, y2) {
    const o = this.get(id);
    if (o) {
      o.toX = x1;
      o.toY = y1;
      o.toX2 = x2;
      o.toY2 = y2;
    }
  }

  delete(id) {
    this.objects.delete(id);
  }
  setText(id, text) {
    const o = this.get(id);
    if (o) o.text = text;
  }
  setPosition(id, x, y) {
    const o = this.get(id);
    if (o) {
      o.toX = x;
      o.toY = y;
    }
  }
  move(id, x, y) {
    this.setPosition(id, x, y);
  }
  setForegroundColor(id, color) {
    const o = this.get(id);
    if (o) o.fg = color;
  }
  setBackgroundColor(id, color) {
    const o = this.get(id);
    if (o) o.bg = color;
  }
  setHighlight(id, on) {
    const o = this.get(id);
    if (o) o.highlighted = !!on;
  }
  setAlpha(id, alpha) {
    const o = this.get(id);
    if (o) o.alpha = alpha;
  }
  setLayer(id, layer) {
    const o = this.get(id);
    if (o) o.layer = layer;
  }
  setRadius(id, r) {
    const o = this.get(id);
    if (o) o.r = r;
  }

  // Instant position set (used at frame-boundary / skip)
  applyFinalPositions() {
    for (const o of this.objects.values()) {
      o.x = o.toX;
      o.y = o.toY;
    }
  }
  lerpStep(percent) {
    for (const o of this.objects.values()) {
      o.x += (o.toX - o.x) * percent;
      o.y += (o.toY - o.y) * percent;
    }
  }
}

// ---- VisualizerEngine: playback controller (replaces AnimationManager) ----
class VisualizerEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.objectManager = new ObjectManager(canvas);

    this.steps = []; // array of arrays-of-commands, split on 'step'
    this.stepIndex = 0;
    this.history = []; // objectManager snapshots per step (simplified undo)
    this.isPlaying = false;
    this.speed = 75; // 1-100, higher = faster
    this._raf = null;
    this._lerpT = 0;

    this.onFrameChange = null; // optional UI callback(stepIndex, total)
  }

  // Load a flat command list; 'step' marks a frame boundary. Wipes everything (hard reset).
  loadCommands(commands) {
    this.pause();
    this.objectManager.clear();
    this.steps = [[]];
    for (const c of commands) {
      if (c[0] === "step") this.steps.push([]);
      else this.steps[this.steps.length - 1].push(c);
    }
    this.stepIndex = 0;
    this.history = [this.objectManager.snapshot()];
    this._applyStep(0);
    this._notify();
  }

  // Extend the CURRENT session with more commands, without wiping existing objects.
  // Used by algorithms (e.g. BST) whose visuals should persist across operations —
  // only the specific nodes/edges that change get created/moved/deleted.
  appendCommands(commands) {
    this.pause();
    if (this.steps.length === 0) this.steps = [[]];
    if (this.history[this.stepIndex] === undefined) {
      this.history[this.stepIndex] = this.objectManager.snapshot();
    }
    this.steps.push([]); // new operation starts its own fresh frame
    for (const c of commands) {
      if (c[0] === "step") this.steps.push([]);
      else this.steps[this.steps.length - 1].push(c);
    }
    this._notify();
  }

  _dispatch(cmd) {
    const [action, ...args] = cmd;
    const fn = this.objectManager[action];
    if (typeof fn === "function") fn.apply(this.objectManager, args);
  }

  _applyStep(index) {
    for (const cmd of this.steps[index] || []) this._dispatch(cmd);
    this.objectManager.applyFinalPositions();
    this.objectManager.draw();
  }

  // ---- Public Controls API ----
  play() {
    if (this.isPlaying || this.stepIndex >= this.steps.length - 1) return;
    this.isPlaying = true;
    this._lerpT = 0;
    this._loop(performance.now());
  }

  pause() {
    this.isPlaying = false;
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = null;
  }

  stepForward() {
    this.pause();
    if (this.stepIndex >= this.steps.length - 1) return;
    this.stepIndex++;
    this.history[this.stepIndex] = this.objectManager.snapshot();
    this._applyStep(this.stepIndex);
    this._notify();
  }

  stepBackward() {
    this.pause();
    if (this.stepIndex <= 0) return;
    this.stepIndex--;
    this.objectManager.restore(this.history[this.stepIndex]);
    this.objectManager.draw();
    this._notify();
  }

  reset() {
    this.pause();
    this.stepIndex = 0;
    if (this.history[0]) this.objectManager.restore(this.history[0]);
    this.objectManager.draw();
    this._notify();
  }

  // Jump directly to the final frame without animating through the steps in between
  skipToEnd() {
    this.pause();
    while (this.stepIndex < this.steps.length - 1) {
      this.stepIndex++;
      if (this.history[this.stepIndex] === undefined)
        this.history[this.stepIndex] = this.objectManager.snapshot();
      this._applyStep(this.stepIndex);
    }
    this._notify();
  }

  setSpeed(speed) {
    this.speed = Math.max(1, Math.min(100, speed));
  }

  isFinished() {
    return this.stepIndex >= this.steps.length - 1;
  }

  // ---- Internal render loop (lerps between step boundaries) ----
  _loop(now) {
    if (!this.isPlaying) return;
    const msPerStep = 600 - (this.speed / 100) * 550; // ~600ms slow -> ~50ms fast
    this._lerpT += 16.67 / msPerStep;

    if (this._lerpT >= 1) {
      this._lerpT = 0;
      if (this.stepIndex >= this.steps.length - 1) {
        this.pause();
        this._notify();
        return;
      }
      this.stepIndex++;
      this.history[this.stepIndex] = this.objectManager.snapshot();
      this._applyStep(this.stepIndex);
      this._notify();
    } else {
      this.objectManager.lerpStep(0.3);
      this.objectManager.draw();
    }
    this._raf = requestAnimationFrame((t) => this._loop(t));
  }

  _notify() {
    this.onFrameChange?.(this.stepIndex, this.steps.length - 1);
  }
}

// ---- VisualizerRegistry: factory/map for pluggable Algorithm classes ----
class VisualizerRegistry {
  static _map = new Map();

  static register(key, AlgorithmClass) {
    this._map.set(key, AlgorithmClass);
  }

  static list() {
    return [...this._map.keys()];
  }

  // Mounts a registered algorithm onto a canvas + controls container
  static mount(key, { canvasId = "algoCanvas", controlsId } = {}) {
    const AlgorithmClass = this._map.get(key);
    if (!AlgorithmClass) throw new Error(`Visualizer "${key}" not registered`);

    const canvas = document.getElementById(canvasId);
    if (!canvas) throw new Error(`Canvas #${canvasId} not found`);

    const engine = new VisualizerEngine(canvas);
    const instance = new AlgorithmClass(engine, controlsId);
    return { engine, instance };
  }
}

export {
  ThemeColors,
  AnimatedObject,
  ObjectManager,
  VisualizerEngine,
  VisualizerRegistry,
};
