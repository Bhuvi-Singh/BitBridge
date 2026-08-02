// visualizers/visualizer-init.js
// Import all algorithms and register them with VisualizerRegistry
// Call this once at app startup (after DOM ready)

export async function initializeVisualizers() {
    // Import registry
    const { VisualizerRegistry } = await import('./core/VisualizerEngine.js');

    // Import and auto-register all algorithm modules
    // (each module calls VisualizerRegistry.register() on module load)
    await import('./algorithms/BubbleSort.js');
    await import('./algorithms/BST.js');
    // await import('./algorithms/LinkedList.js');
    // await import('./algorithms/BFS.js');
    // ... more algorithms as needed

    console.log('Visualizers registered:', VisualizerRegistry.list());
    return VisualizerRegistry;
}