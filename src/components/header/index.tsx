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
  refs: {
    home: React.RefObject<HTMLDivElement>
    about: React.RefObject<HTMLDivElement>
    skills: React.RefObject<HTMLDivElement>
    experience: React.RefObject<HTMLDivElement>
    work: React.RefObject<HTMLDivElement>
    form: React.RefObject<HTMLDivElement>
  }
}

export function Header({ handleTheme, theme, refs }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false) // Fecha o menu ao clicar
    }
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
          <button onClick={() => scrollToSection(refs.home)}>Início</button>
          <button onClick={() => scrollToSection(refs.about)}>Sobre Mim</button>
          <button onClick={() => scrollToSection(refs.skills)}>
            Habilidades
          </button>
          <button onClick={() => scrollToSection(refs.experience)}>
            Experiências
          </button>
          <button onClick={() => scrollToSection(refs.work)}>Projetos</button>
          <button onClick={() => scrollToSection(refs.form)}>Contato</button>
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
            href="cv.pdf"
            download="Curriculo-Gabriel Souza Dev.pdf"
            aria-label="Baixar Currículo em PDF"
          >
            Baixar Currículo
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
            <button onClick={() => scrollToSection(refs.home)}>Início</button>
            <button onClick={() => scrollToSection(refs.about)}>
              Sobre Mim
            </button>
            <button onClick={() => scrollToSection(refs.skills)}>
              Habilidades
            </button>
            <button onClick={() => scrollToSection(refs.experience)}>
              Experiências
            </button>
            <button onClick={() => scrollToSection(refs.work)}>Projetos</button>
            <button onClick={() => scrollToSection(refs.form)}>Contato</button>
          </Diviser>
          <ContainerButton role="group" aria-label="Ações do usuário">
            <button
              onClick={handleTheme}
              aria-label={`Alternar para o tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
            >
              Mudar de thema
              {theme === 'dark' ? (
                <MdDarkMode size={24} color="#fff" />
              ) : (
                <FaSun size={24} />
              )}
            </button>
            <a
              href="cv.pdf"
              download="Curriculo-Gabriel Souza Dev.pdf"
              aria-label="Baixar Currículo em PDF"
            >
              Baixar Currículo
            </a>
          </ContainerButton>
        </MobileMenu>
      )}
    </HeaderContainer>
  )
}
