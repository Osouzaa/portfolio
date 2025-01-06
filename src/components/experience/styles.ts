import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6rem;
  position: relative;

  background-color: ${(props) => props.theme['gray-50']};
  width: 100vw;
  width: 100%;
  margin: 0 auto;
`

export const SectionButton = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    padding: 0.375rem 1.2rem;
    border-radius: 12px;
    background-color: ${(props) => props.theme['gray-200']};
    border: none;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 20px;
    color: ${(props) => props.theme['gray-600']};
    cursor: pointer;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 28px;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
  }
`

export const CardExperience = styled.section`
  background-color: ${(props) => props.theme['gray-100']};
  max-width: 896px;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;

  gap: 3rem;

  img {
    max-width: 150px;
    object-fit: contain;
  }

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 24px;
  }
`

export const SectionInformationInterprise = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 408px;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 32px;
    color: ${(props) => props.theme['gray-900']};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 24px;
    color: ${(props) => props.theme['gray-600']};
    text-align: justify;
    width: 100%;
    margin-left: 1rem;
  }
`
