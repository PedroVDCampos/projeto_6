import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background: #f8f9fa;
    color: #333;
  }

  a {
    text-decoration: none;
    color: white;
    margin: 0 10px;
  }
`;

export default GlobalStyles;
