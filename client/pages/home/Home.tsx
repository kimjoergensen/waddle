import { Category } from '/client/models/category'
import { CategoryService } from '/client/services/category-service'
import React from 'react'

import { CategoryList } from './components/category-list/CategoryList'

export const Home: React.FunctionComponent = props => {
  const [categories, setCategories] = React.useState<Category[]>(null)

  React.useEffect(() => {
    const getCategories = async () => {
      const categories = await CategoryService.getAllAsync()
      setCategories(categories)
    }

    getCategories()
  }, [])

  return (
    <React.Fragment>
      {categories &&
        <CategoryList categories={categories} />
      }
    </React.Fragment>
  )
}