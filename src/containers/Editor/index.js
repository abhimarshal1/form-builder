import React, { useContext, useRef } from "react";

// Components
import Editor from "components/Editor";

// Providers
import { StoreContext } from "providers/StoreProvider";

// Utils
import { IsJsonString } from "utils/common";

// Styled
import { StyledContainer } from "./styled";

const SchemaEditor = ({ content }) => {
  const { dispatch } = useContext(StoreContext);

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value, event) => {
    if (IsJsonString(value)) {
      dispatch({ type: "UPDATE_SCHEMA", payload: value });
    }
  };

  return (
    <StyledContainer className="editor-container">
      <Editor
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        value={content}
      />
    </StyledContainer>
  );
};

export default SchemaEditor;
