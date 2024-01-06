import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;

    // font definitions
    --font-serif: "Merriweather";
    --font-sans-serif: "Lato";

    // color defintions
    --deemphasized-text: #666;
    
    font-family: var(--font-sans-serif), sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  * {
    font-family: inherit;
  }
`
