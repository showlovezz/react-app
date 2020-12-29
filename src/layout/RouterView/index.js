import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'

import Loader from '../../commons/Loader'

const RouterView = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {
          routes.map((route, index) => {
            if (!route.component) return null
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={() => (<route.component />)}
              />
            )
          })
        }
      </Switch>
    </Suspense>
  )
}

export default RouterView
