import { createGlobalStyle } from 'styled-components'
import { colors } from './styleConfig'
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Red Hat Display', sans-serif;
    color: ${colors.dark}
  }

  h1,h2,p {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`
