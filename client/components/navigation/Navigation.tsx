import { useTheme } from '/client/hooks/UseTheme'
import React from 'react'

import { headerStyles } from './header.styles'
import styles from './navigation.module.scss'

export const Navigation: React.FunctionComponent = props => {
  const { theme } = useTheme()

  return (
    <header className={styles.nav} style={{ ...headerStyles(theme.primary) }}>
      <div className={styles.content}>
        {props.children}
      </div>
    </header>
  )
}