import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Components
import { Form } from '..';

const renderer = new ShallowRenderer();

describe('Form', () => {
  test('shallow render & match the snapshot', () => {
    renderer.render(
      <Form
        onSubmit={jest.fn()}
        items={[
          {
            key: 'username',
            type: 'string',
            label: 'Username',
            placeholder: 'Enter username',
            required: true,
          },
          {
            key: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'Enter Password',
            required: true,
          },
        ]}
      />,
    );

    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});
