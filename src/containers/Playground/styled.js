import styled from "styled-components";

export const StyledContainer = styled.div`
  & > .playgound-wrapper {
    height: 800px;
    & > .editor-container,
    .form-container {
      margin: 2rem;
      flex: 1 1;
    }
  }

  .documentation-container {
    background-color: white;
    width: auto;
    border-radius: 0.5rem;
  }
`;
