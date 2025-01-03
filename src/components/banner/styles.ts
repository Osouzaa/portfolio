import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilhando os itens na versão mobile */
    align-items: center; /* Centralizando os itens */
  }
`

export const HeaderBanner = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 768px;
  width: 100%;

  @media (max-width: 768px) {
    order: 2;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 72px;
  color: ${(props) => props.theme['gray-900']};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 48px;
  }
`

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme['gray-600']};
`

export const ContentIcons = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 3rem;

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme['gray-600']};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`

export const SectionIcons = styled.section`
  display: flex;
  gap: 0.75rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-600']};
    margin-top: 3rem;
  }
`

export const ImagePerfil = styled.figure`
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
