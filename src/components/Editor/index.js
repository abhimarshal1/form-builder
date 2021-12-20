import React from 'react';
import Editor from '@monaco-editor/react';

export var SchemaEditor = function (props) {
  return (
    <Editor
      height="100%"
      defaultLanguage="json"
      defaultValue="// some comment"
      theme="vs-dark"
      options={{ fontSize: '16' }}
      {...props}
    />
  );
};

export default SchemaEditor;
