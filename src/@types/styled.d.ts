import 'styled-components'
import type { darkTheme } from './../styles/theme/darkTheme'

type ThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
