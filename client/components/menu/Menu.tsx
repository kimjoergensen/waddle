import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'

import styles from './menu.module.scss'

export const Menu: React.FunctionComponent = props => {
  return (
    <div className={styles.menu}>
      <MenuIcon />
    </div>
  )
}