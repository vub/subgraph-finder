import { expect } from 'chai';
import { TreeNode } from './tree-node';

describe('TreeNode', () => {
  it('Create correct tree', () => {
    const tree = new TreeNode('A');
    tree.addChild(new TreeNode('B'));
    tree.addChild(new TreeNode('C'));
    const node = tree.findNode(tree, new TreeNode('B'));
    if (node) {
      node.addChild(new TreeNode('D'))
    }

    expect(tree.childrens.length).equal(2);
    expect(tree.childrens[0].childrens.length).equal(1);
    expect(tree.childrens[0].childrens[0].value).equal('D');
  });
});
