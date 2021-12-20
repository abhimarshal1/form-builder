import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Components
import { Space } from '..';

const renderer = new ShallowRenderer();

describe('Space', () => {
  test('shallow render & match the snapshot', () => {
    renderer.render(<Space flexDirection="Column" />);

    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});
