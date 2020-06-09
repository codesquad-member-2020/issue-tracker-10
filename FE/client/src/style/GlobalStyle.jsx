import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const variables = css``;

export const GlobalStyle = createGlobalStyle`
${reset}
${variables}

* {
    font-size: 1rem;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
  }

  button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  background: transparent;
 }

`;
