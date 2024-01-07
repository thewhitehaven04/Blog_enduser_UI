import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;

    // font definitions
    --font-serif: "Roboto Serif Variable";
    --font-sans-serif: "Lato";

    // color defintions
    --deemphasized-text: #666;
    --gray: #6667;
    
    font-size: 14px;
    font-family: var(--font-sans-serif), sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  * {
    font-family: inherit;
  }
`
