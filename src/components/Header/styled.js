import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  & > .ui.header {
    color: white;
    font-family: "proxima-nova", "Roboto", sans-serif;
  }
`;
