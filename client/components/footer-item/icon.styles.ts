import ThemeConfig from '/client/theme/theme-config'
import ThemeUtils from '/client/theme/theme-utils'
import { CSSProperties } from 'react'

export const iconStyles = (theme: ThemeConfig.ColorScheme): CSSProperties => ({
  color: theme.color,
  border: ThemeUtils.border(theme, 1, 'solid')
})
