// visualizers/visualizer-init.js
export async function initializeVisualizers() {
  const { VisualizerRegistry } = await import("./VisualizerEngine.js");
  await import("./algorithms/BubbleSort.js");
  await import("./algorithms/BST.js");
  await import("./algorithms/ArrayList.js");
  console.log("Visualizers registered:", VisualizerRegistry.list());
  return VisualizerRegistry;
}
