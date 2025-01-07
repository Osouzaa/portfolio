import styled from 'styled-components'

export const WorkContainer = styled.div`
  max-width: 1440px;
  margin: 2rem auto;
  padding: 1rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`

export const WorkContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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

export const ContainerWork = styled.section`
  max-width: 1152px;
  background-color: ${(props) => props.theme['gray-100']};

  /* padding: 3rem; */
  border-radius: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`

export const ContentImage = styled.div`
  max-width: 50%;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 12px 0 0 12px;
  padding: 3rem;
  img {
    max-width: 480px;
    height: 384px;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 100%;
    border-radius: 12px;
    img {
      max-width: 280px;
      height: auto;
      object-fit: contain;
    }
  }
`

export const ContainerSectionDescriptionProject = styled.section`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  color: ${(props) => props.theme['gray-900']};
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme['gray-600']};
  text-align: justify;
`

export const SectionSkills = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  p {
    padding: 0.5rem 1rem;
    border-radius: 12px;
    background-color: ${(props) => props.theme['gray-200']};
    border: none;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['gray-600']};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['gray-300']};
      transition: background-color 0.2s ease-in-out;
    }
  }
`

export const LinkProject = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme['gray-600']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
    transition: text-decoration 0.2s ease-in-out;
  }
`
