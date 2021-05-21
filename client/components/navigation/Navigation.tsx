import { useTheme } from '/client/hooks/UseTheme'
import ThemeUtils from '/client/theme/theme-utils'
import React from 'react'

import styles from './navigation.module.scss'

export const Navigation: React.FunctionComponent = props => {
  const theme = useTheme()

  return (
    <header className={styles.nav} style={{ borderBottom: ThemeUtils.border(theme.primary, 1, 'solid') }}>
      <div className={styles.navContent}>
        {props.children}
      </div>
    </header>
  )
}