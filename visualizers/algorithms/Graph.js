// visualizers/algorithms/Graph.js
// Base class for graph-based visualizers (BFS, DFS, etc.) on the BitBridge
// VisualizerEngine. Mirrors the role BST.js/ArrayList.js play for their
// structures: builds a random or user-entered graph, lays vertices out on a
// circle, and exposes small helpers subclasses use to animate traversals.
//
// Not a port of USF Graph.js/GraphValues.js — those depended on
// AnimationMain/act.* and a bespoke "Create Graph" modal. This is a fresh,
// minimal implementation sized to what BFS/DFS actually need.
import Algorithm from './Algorithm.js';

const VERTEX_RADIUS = 22;
const LAYOUT_MARGIN = 60;
const STATUS_Y = 20;
const GRAPH_TOP_Y = 70; // vertices laid out below the status label

export default class Graph extends Algorithm {
    constructor(engine, controlsId, adjMatrix) {
        super(engine, controlsId);
        this.size = 0;
        this.adj_matrix = [];
        this.circleID = [];
        this.edgeID = {}; // `${a}-${b}` (a<b) -> command id, one line per undirected pair
        this.directed = false;

        this.statusLabelId = this.id();
        const cw = this.engine.canvas.width || 800;
        this.cmd('createLabel', this.statusLabelId, '', cw / 2, STATUS_Y);

        if (adjMatrix) this.setup(adjMatrix);
        else this.setup(this._randomAdjMatrix(6));

        this.addControls();
    }

    toStr(vertexIndex) {
        return String.fromCharCode(65 + vertexIndex);
    }

    _setStatus(msg) { this.cmd('setText', this.statusLabelId, msg); }

    // ---- Layout: vertices evenly spaced on a circle ----
    _layoutPositions(n) {
        const cw = this.engine.canvas.width || 800;
        const ch = Math.max(this.engine.canvas.height || 500, 420);
        const cx = cw / 2;
        const cy = GRAPH_TOP_Y + (ch - GRAPH_TOP_Y - LAYOUT_MARGIN) / 2;
        const r = Math.min(cx - LAYOUT_MARGIN - VERTEX_RADIUS, (ch - GRAPH_TOP_Y - LAYOUT_MARGIN) / 2);
        const positions = [];
        for (let i = 0; i < n; i++) {
            const angle = (2 * Math.PI * i) / n - Math.PI / 2;
            positions.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
        }
        return positions;
    }

    // ---- Build / rebuild the graph from an adjacency matrix ----
    setup(adjMatrix) {
        this.hardReset();
        this.commands = [];
        this.size = adjMatrix.length;
        this.adj_matrix = adjMatrix.map(row => [...row]);
        this.circleID = [];
        this.edgeID = {};

        const cw = this.engine.canvas.width || 800;
        this.cmd('createLabel', this.statusLabelId, '', cw / 2, STATUS_Y);

        const positions = this._layoutPositions(this.size);
        for (let i = 0; i < this.size; i++) {
            const id = this.id();
            this.circleID.push(id);
            this.cmd('createCircle', id, this.toStr(i), positions[i].x, positions[i].y, VERTEX_RADIUS);
        }
        this.rebuildEdges();
        this.run();
    }

    // (re)draws every edge implied by adj_matrix. Safe to call repeatedly —
    // clears prior edge ids first so stale lines never linger after setup().
    rebuildEdges() {
        Object.values(this.edgeID).forEach(id => this.cmd('delete', id));
        this.edgeID = {};
        const positions = this.circleID.map((_, i) => this._vertexPos(i));
        for (let i = 0; i < this.size; i++) {
            for (let j = this.directed ? 0 : i + 1; j < this.size; j++) {
                if (i === j) continue;
                if (this.adj_matrix[i][j] > 0) {
                    const key = this.directed ? `${i}-${j}` : `${Math.min(i, j)}-${Math.max(i, j)}`;
                    if (this.edgeID[key]) continue;
                    const id = this.id();
                    this.edgeID[key] = id;
                    this.cmd('createLine', id, positions[i].x, positions[i].y, positions[j].x, positions[j].y, this.palette.muted);
                }
            }
        }
    }

    _vertexPos(i) {
        // Positions aren't tracked live post-layout; recompute from the same
        // deterministic layout function used at setup() time.
        return this._layoutPositions(this.size)[i];
    }

    highlightEdge(a, b, on) {
        const key = this.directed ? `${a}-${b}` : `${Math.min(a, b)}-${Math.max(a, b)}`;
        const id = this.edgeID[key];
        if (id === undefined) return;
        this.cmd('setHighlight', id, !!on);
        if (on) this.cmd('setForegroundColor', id, this.palette.highlight);
    }

    visitVertex(i) {
        this.highlight(this.circleID[i], this.palette.accent);
    }
    leaveVertex(i) {
        if (i !== undefined) this.unhighlight(this.circleID[i]);
    }

    resetVertexColors() {
        this.circleID.forEach(id => {
            this.cmd('setHighlight', id, false);
            this.cmd('setBackgroundColor', id, this.palette.nodeBg);
            this.cmd('setForegroundColor', id, this.palette.text);
        });
    }

    // ---- Random graph generator (used by "Random" control) ----
    _randomAdjMatrix(n) {
        const m = Array.from({ length: n }, () => new Array(n).fill(0));
        // Guarantee connectivity via a random spanning path, then sprinkle extra edges
        const order = [...Array(n).keys()].sort(() => Math.random() - 0.5);
        for (let i = 1; i < n; i++) {
            const a = order[i - 1], b = order[i];
            m[a][b] = 1; m[b][a] = 1;
        }
        const extra = Math.floor(n * 0.6);
        for (let k = 0; k < extra; k++) {
            const a = Math.floor(Math.random() * n);
            const b = Math.floor(Math.random() * n);
            if (a !== b) { m[a][b] = 1; m[b][a] = 1; }
        }
        return m;
    }

    randomGraph(n = 6) {
        this.setup(this._randomAdjMatrix(n));
    }

    // ---- Shared controls: Random / vertex-count aren't algorithm-specific ----
    addControls() {
        this.startGroup();
        this.addButtonInline('Random Graph', () => this.randomGraph(Math.floor(Math.random() * 4) + 5));
    }

    // ---- Shared action-runner used by subclasses' Run/Start buttons ----
    // Mirrors the old implementAction(fn, ...args) signature: builds commands
    // via fn, queues a reset flourish first, then plays.
    implementAction(fn, ...args) {
        this.resetVertexColors();
        this.commands = [];
        fn(...args);
        this.run();
    }
}