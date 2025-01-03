import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 3rem;
`

export const HeaderBanner = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 768px;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 72px;
  color: ${(props) => props.theme['gray-900']};
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
  width: 100%; /* Adicionando para garantir que o container tenha a mesma largura da imagem */
  max-width: 280px;
  height: auto; /* A altura será ajustada conforme o conteúdo */

  img {
    width: 100%;
    height: 100%; /* Garantindo que a imagem ocupe toda a altura do container */
    object-fit: cover;
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
`
