import { useState } from 'react'
import { Menu, MoonStar, Sun, X } from 'lucide-react'
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
            aria-label="Alternar entre tema claro e escuro"
          >
            {theme === 'dark' ? (
              <MoonStar size={24} color="#fff" />
            ) : (
              <Sun size={24} />
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
      <OpenMenu onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              aria-label="Alternar entre tema claro e escuro"
            >
              Mudar Tema
              {theme === 'dark' ? (
                <MoonStar size={24} color="#fff" />
              ) : (
                <Sun size={24} />
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
