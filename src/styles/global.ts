import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.default};
    color: ${(props) => props.theme['gray-950']};
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
`
