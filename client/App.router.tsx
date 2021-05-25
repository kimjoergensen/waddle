import React from 'react'
import Router from 'react-router-dom'

import { HomeRouter } from './pages/home/Home.router'
import { ProductRouter } from './pages/product/Product.router'

export enum AppRoutes {
  Home = '/home',
  Product = '/product'
}

export const AppRouter: React.FunctionComponent = props => {
  return (
    <Router.Switch>
      <Router.Route path={AppRoutes.Home}>
        <HomeRouter />
      </Router.Route>
      <Router.Route path={AppRoutes.Product}>
        <ProductRouter />
      </Router.Route>
      <Router.Route exact path="/">
        {/* TODO: LandingPage */}
        <h3>Landing Page</h3>
      </Router.Route>
      <Router.Route path="*">
        {/* TODO: NoMatch */}
        <h3>404: Page not found</h3>
      </Router.Route>
    </Router.Switch>
  )
}