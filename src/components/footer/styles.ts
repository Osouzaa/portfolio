import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-50']};
  border-top: 1px solid ${(props) => props.theme['gray-200']};

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.theme['gray-600']};
  }
`
