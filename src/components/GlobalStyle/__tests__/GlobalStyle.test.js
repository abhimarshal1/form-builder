import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Components
import { GlobalStyle } from '..';

const renderer = new ShallowRenderer();

describe('GlobalStyle', () => {
  test('shallow render & match the snapshot', () => {
    renderer.render(<GlobalStyle />);

    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});
