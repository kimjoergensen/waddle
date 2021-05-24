import React from 'react'

import styles from './logo.module.scss'

export const Logo: React.FunctionComponent = props => {
  return (
    <div className={styles.logo}>
      <h1>Waddle</h1>
      <h4>Clumsy swaying motion</h4>
    </div>
  )
}