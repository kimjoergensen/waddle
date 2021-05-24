import ThemeConfig from '/client/theme/theme-config'
import ThemeUtils from '/client/theme/theme-utils'
import { CSSProperties } from 'react'

export const headerStyles = (theme: ThemeConfig.ColorScheme): CSSProperties => ({
  background: theme.background,
  color: theme.color,
  borderBottom: ThemeUtils.border(theme, 1, 'solid')
})
