// Suppose that we only add all tree node by order
// Else we should be place more logic of add root parent

import { TreeNode } from "./tree-node";

export class Tree {
  root: TreeNode;

  genTreeFromArray(data: [string | number, string | number][]): void {
    this.root = new TreeNode(data[0][0]);
    for (const rawNode of data) {
      const node = this.root.findNode(this.root, new TreeNode(rawNode[0]));
      if (node) {
        node.addChild(new TreeNode(rawNode[1]));
      }
    }
    console.log(this.root);
  }

  findBiggestBranch(subNode: TreeNode): Tree {
    const subTreeRoot = this.root.findNode(this.root, subNode);

    if (!subTreeRoot) {
      const newTree = new Tree();
      newTree.root = subNode;
      return newTree;
    } else {
      const subTree = new Tree();
      subTree.root = subTreeRoot;
      return subTree; 
    }
  }

}