import ThemeConfig from '/client/theme/theme-config'
import React from 'react'

export const useTheme = (variant: ThemeConfig.Variant): ThemeConfig.Theme => {
  return React.useMemo(() => ThemeConfig.getTheme(variant), [variant])
}