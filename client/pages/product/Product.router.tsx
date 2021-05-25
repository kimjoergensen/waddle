import React from 'react'
import Router from 'react-router-dom'

import { Product } from './Product'

export enum ProductRoutes {
  New = '/new',
  Edit = '/edit/:id'
}

export const ProductRouter: React.FunctionComponent = props => {
  const { path } = Router.useRouteMatch()

  return (
    <Router.Switch>
      <Router.Route path={`${path}${ProductRoutes.New}`}>
        {/* ProductEdit with no id */}
      </Router.Route>
      <Router.Route path={`${path}${ProductRoutes.Edit}`}>
        {/* ProductEdit with id */}
      </Router.Route>
      <Router.Route exact path={path}>
        <Product />
      </Router.Route>
    </Router.Switch>
  )
}