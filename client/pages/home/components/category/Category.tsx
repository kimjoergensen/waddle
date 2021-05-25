import { useTheme } from '/client/hooks/UseTheme'
import { Category as CategoryModel } from '/client/models/category'
import React from 'react'

import styles from './category.module.scss'
import { categoryStyles } from './category.styles'

interface Props {
  category: CategoryModel
}

export const Category: React.FunctionComponent<Props> = props => {
  const { theme } = useTheme()

  return (
    <div className={styles.category} style={{ ...categoryStyles(theme.primary) }}>
      <img src={props.category.img} alt="category" />
    </div>
  )
}