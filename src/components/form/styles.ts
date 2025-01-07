import styled from 'styled-components'

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  background-color: ${(props) => props.theme['gray-50']};
  width: 100vw;
  width: 100%;
  margin: 2rem auto;

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

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  max-width: 604px;
  width: 100%;
`

export const LabelContent = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme['gray-600']};
`

export const InputText = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme['gray-200']};
  border: none;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme['gray-600']};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme['gray-200']};
  border: none;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme['gray-600']};
  resize: none;
`

export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme['gray-200']};
  border: none;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) => props.theme['gray-600']};
  cursor: pointer;
  margin: 2rem 0 4rem 0;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['gray-300']};
    transition: background-color 0.2s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
