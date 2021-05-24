import { useTheme } from '/client/hooks/UseTheme'
import ThemeUtils from '/client/theme/theme-utils'
import React from 'react'

import styles from './footer.module.scss'

export const Footer: React.FunctionComponent = props => {
  const { theme } = useTheme()

  return (
    <footer className={styles.footer} style={{ borderTop: ThemeUtils.border(theme.primary, 1, 'solid') }}>
      <div className={styles.content}>
        {props.children}
      </div>
    </footer>
  )
}