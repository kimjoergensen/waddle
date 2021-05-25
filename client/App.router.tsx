import React from 'react'
import Router from 'react-router-dom'

import { HomeRouter } from './pages/home/Home.router'
import { LandingPage } from './pages/landing-page/LandingPage'
import { NoMatch } from './pages/no-match/NoMatch'
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
        <LandingPage />
      </Router.Route>
      <Router.Route path="*">
        <NoMatch />
      </Router.Route>
    </Router.Switch>
  )
}