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

  /* Estilizando o scroll */
  &::-webkit-scrollbar {
    scrollbar-width: thin; /* Para navegadores compatíveis com CSS padrão */
    scrollbar-color: ${(props) => props.theme['gray-900']} ${(props) => props.theme['gray-100']};
  }

  &::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-100']}; /* Fundo da barra */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-400']}; /* Cor do polegar */
    border-radius: 10px;
    border: 3px solid ${(props) => props.theme['gray-100']}; /* Espaço entre o polegar e o fundo */
  }

 &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-500']}; /* Cor ao passar o mouse */
  }
`
