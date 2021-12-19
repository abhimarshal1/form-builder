import React from "react";
import { Form } from "semantic-ui-react";

const componentMapping = {
  string: (props) => <Form.Input type="text" {...props} />,
  number: (props) => <Form.Input type="number" {...props} />,
  date: (props) => <Form.Input type="date" {...props} />,
  datetime: (props) => <Form.Input type="datetime-local" {...props} />,
  time: (props) => <Form.Input type="time" {...props} />,
  password: (props) => <Form.Input type="password" {...props} />,
  checkbox: (props) => <Form.Checkbox {...props} />,
  dropdown: (props) => <Form.Select {...props} />,
  text: (props) => <Form.TextArea {...props} />,
  radio: (props) => <Form.Radio {...props} />,
};

export const getComponent = (type) => componentMapping[type];
