import ThemeConfig from '/client/theme/theme-config'
import ThemeUtils from '/client/theme/theme-utils'
import { CSSProperties } from 'react'

export const footerStyles = (theme: ThemeConfig.ColorScheme): CSSProperties => ({
  background: theme.background,
  borderTop: ThemeUtils.border(theme, 1, 'solid')
})
