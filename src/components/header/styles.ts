import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  position: relative;

  img {
    cursor: pointer;
    width: 120px;
    object-fit: cover;
  }
`

export const NavBar = styled.div`
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

  @media (max-width: 768px) {
    display: none;
  }
`

export const Diviser = styled.div`
  width: 2px;
  height: 24px;
  background-color: ${(props) => props.theme['gray-100']};

  @media screen and (max-width: 768px) {
    width: 100%;
    background-color: transparent;
    border-bottom: 2px solid ${(props) => props.theme['gray-100']};
    border-top: 2px solid ${(props) => props.theme['gray-100']};
    height: auto;
    display: flex;
    flex-direction: column;
  }
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
    background-color: ${(props) => props.theme['gray-900']} !important;
    padding: 0.375rem 1rem;
    border-radius: 12px;
    color: ${(props) => props.theme['gray-50']} !important;
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme['gray-700']} !important;
      transition: background-color 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;

    a {
      width: 100%;
      text-align: center;
    }

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${(props) => props.theme['gray-600']};
      font-size: 1rem;
      line-height: 24px;
    }
  }
`

export const MobileMenu = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 7rem;
    z-index: 1000;
    background-color: ${(props) => props.theme.default};

    a {
      background-color: transparent;
      color: ${(props) => props.theme['gray-600']};
      padding: 0.375rem 1rem;
      border-radius: 12px;
      text-decoration: none;
      margin: 0.5rem 0;
    }
  }
`

export const OpenMenu = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme['gray-600']};
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
