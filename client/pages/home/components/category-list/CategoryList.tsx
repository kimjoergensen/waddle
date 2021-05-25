import { Category as CategoryModel } from '/client/models/category'
import React from 'react'

import { Category } from '../category/Category'
import styles from './category-list.module.scss'

interface Props {
  categories: CategoryModel[]
}

export const CategoryList: React.FunctionComponent<Props> = props => {
  return (
    <div className={styles.categoryList}>
      {props.categories.map((category, index) =>
        <Category key={index} category={category} />)}
    </div>
  )
}