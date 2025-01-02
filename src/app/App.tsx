import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../styles/theme/darkTheme'
import { lightTheme } from '../styles/theme/lightTheme'
import { GlobalStyle } from '../styles/global'

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <div>
        <h1>Hello</h1>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle Theme
        </button>
      </div>
    </ThemeProvider>
  )
}
