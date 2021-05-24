import { useTheme } from '/client/hooks/UseTheme'
import React from 'react'

import styles from './footer-item.module.scss'
import { iconStyles } from './icon.styles'

interface Props {
  icon: React.ReactElement
  label: string
}

export const FooterItem: React.FunctionComponent<Props> = props => {
  const { theme } = useTheme()

  return (
    <div className={styles.footerItem}>
      <div className={styles.icon} style={{ ...iconStyles(theme.primary) }}>{props.icon}</div>
      <span className={styles.label}>{props.label}</span>
    </div>
  )
}