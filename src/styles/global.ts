import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%; /* 1rem = 16px */

    @media screen and (max-width: 1024px) {
      font-size: 93.75%; /* 1rem = 15px */
    }

    @media screen and (max-width: 768px) {
      font-size: 87.5%; /* 1rem = 14px */
    }

    @media screen and (max-width: 480px) {
      font-size: 81.25%; /* 1rem = 13px */
    }
  }

  body {
    background: ${(props) => props.theme.default};
    color: ${(props) => props.theme['gray-950']};
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }
`
