import ThemeConfig from '/client/theme/theme-config'
import React from 'react'

import { ThemeContext } from '../theme/theme-context'

interface Theme {
  theme: ThemeConfig.Theme
  variant: ThemeConfig.Variant
}

/**
 * Get the current theme object set for the application's theme context.
 * @see {ThemeContext}
 * @returns {Theme} object with theme for the current context's variant (e.g: dark, light).
 * Deconstruct the object to get the { theme } or { variant }.
 * @example const { theme, variant } = useTheme()
 */
export const useTheme = (): Theme => {
  const variant = React.useContext(ThemeContext)
  return { theme: ThemeConfig.getTheme(variant), variant: variant }
}