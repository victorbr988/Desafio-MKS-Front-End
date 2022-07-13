import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: sans-serif;
  }
  body {
    background-color: #F4F4F4;
  }
  .App {
    height: 100%;
  }
`