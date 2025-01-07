import { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../styles/theme/darkTheme'
import { lightTheme } from '../styles/theme/lightTheme'
import { GlobalStyle } from '../styles/global'
import { Header } from '../components/header'
import { AppContainer } from './styles'
import { Banner } from '../components/banner'
import { About } from '../components/about'
import { Skills } from '../components/skills'
import { Experience } from '../components/experience'
import { Work } from '../components/work'
import { Footer } from '../components/footer'
import { Form } from '../components/form'
import { Toaster } from 'sonner'

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  // Criando referências para cada seção
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
    </ThemeProvider>
  )
}
