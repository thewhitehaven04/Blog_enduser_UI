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
    --link-blue: #034694; 
    
    font-size: 12pt;
    font-family: var(--font-sans-serif), sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  * {
    font-family: inherit;
  }

  body {
    margin: 0;
    padding-inline: 8px;
  }
`
