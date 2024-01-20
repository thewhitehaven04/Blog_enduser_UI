import { createGlobalStyle } from 'styled-components'
import '@fontsource/lato'
import "@fontsource/ibm-plex-serif"

export const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;

    // font definitions
    --font-serif: "IBM Plex Serif";
    --font-sans-serif: "Lato";

    // color defintions
    --deemphasized-text: #666;
    --gray: #6669;
    --gray-border: #8889;
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
