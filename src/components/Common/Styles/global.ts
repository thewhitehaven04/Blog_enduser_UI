import { createGlobalStyle } from 'styled-components'
import '@fontsource-variable/outfit'
import '@fontsource-variable/lora'


export const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;

    // font definitions
    --font-serif: "Lora Variable";
    --font-sans-serif: "Outfit Variable";

    // color defintions
    --deemphasized-text: #666;
    --gray: #6669;
    --gray-border: #8884;
    --gray-background: #DDD6;
    --gray-toaster: #ddd;
    --gray-shadow: #333C;
    --link-blue: #034694; 
    
    font-size: 12pt;
    font-family: var(--font-sans-serif), sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  * {
    font-family: inherit;
  }

  p {
    margin-top: 0px;
  }

  body {
    margin: 0;
    position: relative;
  }
`
