import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;

  img {
    cursor: pointer;
    width: 80px;
    object-fit: cover;
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  nav {
    display: flex;
    gap: 1.5rem;

    a {
      text-decoration: none;
      font-weight: 500;
      color: ${(props) => props.theme['gray-600']};
      font-size: 1rem;
      line-height: 24px;
    }
  }
`
export const Diviser = styled.div`
  width: 2px;
  height: 24px;
  background-color: ${(props) => props.theme['gray-100']};
`
export const ContainerButton = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  a {
    background-color: ${(props) => props.theme['gray-900']};
    padding: 0.375rem 1rem;
    border-radius: 12px;
    color: ${(props) => props.theme['gray-50']};
    text-decoration: none;
  }
`
