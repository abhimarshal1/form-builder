import React from "react";
import { Header } from "semantic-ui-react";

// Styled
import { StyledHeader } from "./styled";

const PlaygroundHeader = (props) => {
  return (
    <StyledHeader {...props}>
      <Header as="h2">Playground</Header>
    </StyledHeader>
  );
};

export default PlaygroundHeader;
