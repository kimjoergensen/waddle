import { useTheme } from '/client/hooks/UseTheme'
import React from 'react'

import { buttonStyles } from './button.styles'
import styles from './landing-page.module.scss'

export const LandingPage: React.FunctionComponent = props => {
  const { theme } = useTheme()

  return (
    <div className={styles.landingPage}>
      <div className={styles.container}>
        <h1>Clumsy swaying motion</h1>
        <button className={styles.createProfile} style={{ ...buttonStyles(theme.secondary) }}>
          Create profile
        </button>
      </div>
    </div>
  )
}