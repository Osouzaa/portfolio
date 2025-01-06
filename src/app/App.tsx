import { useState } from 'react'
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

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header handleTheme={handleTheme} theme={theme} />
        <Banner />
      </AppContainer>
      <About />
      <Skills />
      <Experience />
    </ThemeProvider>
  )
}
