import React from 'react';
import { Header } from 'semantic-ui-react';

// Styled
import { StyledHeader } from './styled';

export var PlaygroundHeader = function (props) {
  return (
    <StyledHeader {...props}>
      <Header as="h2">Playground</Header>
    </StyledHeader>
  );
};

export default PlaygroundHeader;
