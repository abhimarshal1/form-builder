import React, { useContext } from "react";

// Providers
import { StoreContext } from "providers/StoreProvider";

// Components
import PlaygroundHeader from "components/Header";
import Space from "components/space";

// Containers
import Editor from "containers/Editor";
import Form from "containers/Form";
import Documentation from "containers/Documentation";

// Styled
import { StyledContainer } from "./styled";

const Playground = () => {
  const { state } = useContext(StoreContext);

  return (
    <StyledContainer className="mb-4">
      <PlaygroundHeader className="mb-2" />
      <Space className="playgound-wrapper" align-items="stretch">
        <Editor content={state.schema} />
        <Form schema={state.schema} />
      </Space>
      <Documentation className="mx-4 my-2 p-2"/>
    </StyledContainer>
  );
};

export default Playground;
