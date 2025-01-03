import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
  position: relative;
  margin-top: 6rem;
  background-color: ${(props) => props.theme['gray-50']};
  width: 100vw;
  padding: 6rem 5rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`
export const Title = styled.h6`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme['gray-900']};
  line-height: 32px;
  margin: 1rem 0;

  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
export const SectionAbout = styled.section`
  width: 100%;
  max-width: 508px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  order: 2;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-600']};
    line-height: 24px;
    text-align: justify;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      display: none;
    }
  }
`
