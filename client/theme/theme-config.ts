import { dark } from './schemes/dark'
import { light } from './schemes/light'

namespace ThemeConfig {
  const themes = {
    light: light,
    dark: dark
  }

  type Color = string

  interface ColorScheme {
    background: Color
    color: Color
  }

  export interface Theme {
    /** Background color for application layout components. */
    background: Color
    /** Default font color for application. */
    color: Color
    /** Primary color scheme. */
    primary: ColorScheme
    /** Secondary color scheme. */
    secondary: ColorScheme
  }

  export enum Variant {
    dark,
    light
  }

  export function getTheme(variant: Variant): Theme {
    switch (variant) {
      case Variant.light:
        return themes.light
      case Variant.dark:
        return themes.dark
      default:
        return themes.light
    }
  }
}

export default ThemeConfig