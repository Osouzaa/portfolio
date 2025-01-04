import { useState } from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'
import { FaSun } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import {
  ContainerButton,
  HeaderContainer,
  NavBar,
  Diviser,
  MobileMenu,
  OpenMenu,
} from './styles'

interface HeaderProps {
  handleTheme: () => void
  theme: string
}
export function Header({ handleTheme, theme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderContainer as="header">
      <img
        src={theme === 'dark' ? 'logo-gsa-hover.png' : 'logo-gsa.png'}
        alt={`Logo GSA para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        width="120"
        height="120"
      />

      <NavBar>
        <nav aria-label="Menu principal">
          <a href="#home" aria-current="page">
            Página Inicial
          </a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <Diviser />
        <ContainerButton role="group" aria-label="Ações do usuário">
          <button
            onClick={handleTheme}
            aria-label={`Alternar para o tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
          >
            {theme === 'dark' ? (
              <MdDarkMode size={24} color="#fff" />
            ) : (
              <FaSun size={24} />
            )}
          </button>
          <a
            href="/path/to/cv.pdf"
            download="Meu-CV.pdf"
            aria-label="Baixar Currículo em PDF"
          >
            Download CV
          </a>
        </ContainerButton>
      </NavBar>

      <OpenMenu
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isMenuOpen ? <IoMdClose size={24} /> : <IoMenuSharp size={24} />}
      </OpenMenu>

      {isMenuOpen && (
        <MobileMenu>
          <Diviser>
            <a href="#home" aria-current="page">
              Página Inicial
            </a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </Diviser>
          <ContainerButton role="group" aria-label="Ações do usuário">
            <button
              onClick={handleTheme}
              aria-label={`Alternar para o tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
            >
              Mudar Tema
              {theme === 'dark' ? (
                <MdDarkMode size={24} color="#fff" />
              ) : (
                <FaSun size={24} />
              )}
            </button>
            <a
              href="/path/to/cv.pdf"
              download="Meu-CV.pdf"
              aria-label="Baixar Currículo em PDF"
            >
              Download CV
            </a>
          </ContainerButton>
        </MobileMenu>
      )}
    </HeaderContainer>
  )
}
