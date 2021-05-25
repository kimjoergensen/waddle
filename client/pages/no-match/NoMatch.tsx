import React from 'react'

import styles from './no-match.module.scss'

export const NoMatch: React.FunctionComponent = props => {
  return (
    <div className={styles.noMatch}>
      <h2>Oh no! Page not found.</h2>
    </div>
  )
}