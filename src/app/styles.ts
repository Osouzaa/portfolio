import styled from 'styled-components'

export const AppContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.default};
  border: none;
  border-radius: 50%;
  padding: 10px 13px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`
