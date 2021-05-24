import ThemeConfig from '/client/theme/theme-config'
import { useContext } from 'react'

import { ThemeContext } from '../theme/theme-context'

/**
 * Get the current theme object set for the application's theme context.
 * @param variantOverride By default the hook will get the variant from the ThemeContext,
 * but the variant can be overriden to get the theme of an explicit variant.
 * @see {ThemeContext}
 * @returns {ThemeConfig.Theme} Theme object for the current context's variant (e.g: dark, light).
 */
export const useTheme = (variantOverride: ThemeConfig.Variant = null): ThemeConfig.Theme => {
  const variant = variantOverride ?? useContext(ThemeContext)
  return ThemeConfig.getTheme(variant)
}