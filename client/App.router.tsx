import React from 'react'
import Router from 'react-router-dom'

import { Home } from './pages/home/Home'

export enum AppRoutes {
  Home = '/home',
  Product = '/product'
}

export const AppRouter: React.FunctionComponent = props => {
  return (
    <Router.Switch>
      <Router.Route path={AppRoutes.Home}>
        <Home />
      </Router.Route>
      <Router.Route path={AppRoutes.Product}>
        {/* TODO: Product */}
        <h3>Product</h3>
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