import styled from 'styled-components'

export const SkillsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`
export const SectionButton = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
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

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`
export const Item = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-600']};
    line-height: 28px;
    font-weight: 400;
  }
`
