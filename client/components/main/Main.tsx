import React from 'react'

import styles from './main.module.scss'

export const Main: React.FunctionComponent = props => {
  return (
    <main className={styles.main}>
      {props.children}
    </main>
  )
}