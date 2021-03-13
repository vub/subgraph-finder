export class TreeNode {
  value: string | number;
  childrens: TreeNode[];

  constructor(value: string | number) {
    this.value = value;
    this.childrens = [];
  }

  addChild(node: TreeNode): void {
    this.childrens.push(node);
  }
  
  findNode(root: TreeNode, node: TreeNode): TreeNode {
    if (root.value === node.value) {
      return root;
    }
    for(const child of root.childrens) {
      return child.findNode(child, node);
    }
  }
}