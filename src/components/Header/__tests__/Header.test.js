import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Components
import { PlaygroundHeader } from '..';

const renderer = new ShallowRenderer();

describe('PlaygroundHeader', () => {
  test('shallow render & match the snapshot', () => {
    renderer.render(<PlaygroundHeader className="playground-header" />);

    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});
