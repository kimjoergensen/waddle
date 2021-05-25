import React from 'react'
import Router from 'react-router-dom'

import { Home } from './Home'

export const HomeRouter: React.FunctionComponent = props => {
  const { path } = Router.useRouteMatch()

  return (
    <Router.Switch>
      <Router.Route path={path}>
        <Home />
      </Router.Route>
    </Router.Switch>
  )
}