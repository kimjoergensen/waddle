import ThemeConfig from '/client/theme/theme-config'
import ThemeUtils from '/client/theme/theme-utils'
import { CSSProperties } from 'react'

export const categoryStyles = (theme: ThemeConfig.ColorScheme): CSSProperties => ({
  background: theme.background,
  border: ThemeUtils.border(theme, 1, 'solid')
})
