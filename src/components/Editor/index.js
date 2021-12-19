import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

const SchemaEditor = (props) => (
  <Editor
    height="100%"
    defaultLanguage="json"
    defaultValue="// some comment"
    theme="vs-dark"
    options={{ fontSize: "16" }}
    {...props}
  />
);

export default SchemaEditor;
