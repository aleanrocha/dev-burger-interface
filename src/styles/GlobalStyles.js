import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  button {
    cursor: pointer;
    transition: 0.3s;
  }
  a {
    text-decoration: none;
    transition: 0.3s;
  }
`