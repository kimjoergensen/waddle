import { useTheme } from '/client/hooks/UseTheme'
import React from 'react'

import styles from './footer.module.scss'
import { footerStyles } from './footer.sstyles'

export const Footer: React.FunctionComponent = props => {
  const { theme } = useTheme()

  return (
    <footer className={styles.footer} style={{ ...footerStyles(theme.primary) }}>
      <div className={styles.content}>
        {props.children}
      </div>
    </footer>
  )
}