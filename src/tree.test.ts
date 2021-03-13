import { expect } from 'chai';
import { graphSeed } from './graph.seed';
import { Tree } from './Tree';

describe('Tree', () => {
  it('GenTreeFromArray', () => {
    const graph = new Tree();
    graph.genTreeFromArray(graphSeed);
    expect(graph.root.childrens.length).equal(1);
    expect(graph.root.childrens[0].childrens.length).equal(2);
  });

  it('FindBiggestSubGraph', () => {
    // TODO
    expect(1).equal(1);
  });
});
