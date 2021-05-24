import { useTheme } from '/client/hooks/UseTheme'
import ThemeConfig from '/client/theme/theme-config'
import React from 'react'

import Brightness4 from '@material-ui/icons/Brightness4'

import { FooterItem } from '../footer-item/FooterItem'

interface Props {
  onThemeChanged: () => void
}

export const ThemeToggle: React.FunctionComponent<Props> = props => {
  const { variant } = useTheme()

  return (
    <div onClick={props.onThemeChanged}>
      <FooterItem
        icon={<Brightness4 />}
        label={variant === ThemeConfig.Variant.light
          ? 'Dark'
          : 'Light'} />
    </div>
  )
}