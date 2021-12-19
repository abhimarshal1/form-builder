import { createGlobalStyle } from "styled-components";

// Utils
import { getSpacingClasses } from "./utils";

const GlobalStyle = createGlobalStyle`
:root {
  font-size: 16px;
}

* {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: #04293A; 
  }

  ${getSpacingClasses()}
`;

export default GlobalStyle;
