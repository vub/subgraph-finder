import { graphSeed } from "./graph.seed";
import { Tree } from "./Tree";
import { TreeNode } from "./tree-node";

export class App {
  public run(): boolean {
    const graph = new Tree();
    graph.genTreeFromArray(graphSeed);
    console.log(graph);

    const subTreeB = graph.findBiggestBranch(new TreeNode('B'));
    console.log(subTreeB);

    const subTreeD = graph.findBiggestBranch(new TreeNode('D'));
    console.log(subTreeD);

    return true;
  }
}

const app = new App();
app.run();