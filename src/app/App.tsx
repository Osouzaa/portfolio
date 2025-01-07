import { useState, useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../styles/theme/darkTheme'
import { lightTheme } from '../styles/theme/lightTheme'
import { GlobalStyle } from '../styles/global'
import { Header } from '../components/header'
import { AppContainer, ScrollButton } from './styles'
import { Banner } from '../components/banner'
import { About } from '../components/about'
import { Skills } from '../components/skills'
import { Experience } from '../components/experience'
import { Work } from '../components/work'
import { Footer } from '../components/footer'
import { Form } from '../components/form'
import { Toaster } from 'sonner'
import { FaLongArrowAltUp } from 'react-icons/fa'

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [showScrollButton, setShowScrollButton] = useState(false)

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const scrollToTop = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Toaster richColors />
      <AppContainer ref={homeRef}>
        <Header
          handleTheme={handleTheme}
          theme={theme}
          refs={{
            home: homeRef,
            about: aboutRef,
            skills: skillsRef,
            experience: experienceRef,
            work: workRef,
            form: formRef,
          }}
        />
        <Banner />
      </AppContainer>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={formRef}>
        <Form />
      </div>
      <Footer />
      {showScrollButton && (
        <ScrollButton
          onClick={scrollToTop}
          title="Volta para o inicio da Pagina"
        >
          <FaLongArrowAltUp size={20} />
        </ScrollButton>
      )}
    </ThemeProvider>
  )
}
