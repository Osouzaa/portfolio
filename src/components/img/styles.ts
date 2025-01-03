import styled from 'styled-components'

export const ImagePerfilContainer = styled.figure`
  position: relative;
  width: 100%;
  max-width: 280px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      width: 75%;
      height: 100%;
      border: 8px solid ${(props) => props.theme.default};
    }
    order: 1;
    max-width: 100%;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ShadowImg = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 100%; /* Ajustando para acompanhar o tamanho da imagem */
  height: 100%; /* Ajustando a altura também */
  background-color: ${(props) => props.theme['gray-200']};
  z-index: -1;

  @media (max-width: 768px) {
    width: 82%; /* Ajustando a largura */
    top: 10%; /* Colocando a posição no meio verticalmente */
    left: 9%; /* Colocando a posição no meio horizontalmente */
  }
`
