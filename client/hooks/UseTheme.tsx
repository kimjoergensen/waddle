import ThemeConfig from '/client/theme/theme-config'
import React, { useContext } from 'react'

import { ThemeContext } from '../theme/theme-provider'

export const useTheme = (): ThemeConfig.Theme => {
  const variant = useContext(ThemeContext)
  return React.useMemo(() => ThemeConfig.getTheme(variant), [variant])
}