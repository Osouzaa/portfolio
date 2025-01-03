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
