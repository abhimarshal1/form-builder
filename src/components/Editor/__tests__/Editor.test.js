import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Components
import { SchemaEditor } from '..';

const renderer = new ShallowRenderer();

describe('SchemaEditor', () => {
  test('shallow render & match the snapshot', () => {
    renderer.render(<SchemaEditor name="editor" />);

    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});
