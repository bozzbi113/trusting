import React from "react"
import { Route, Redirect } from "react-router-dom"

function withAuthRoute(getToken, pathname) {
  return function AuthRoute({ component: Component, routes, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => {
          console.log('===test', props)
          if (getToken()) {
            return <Component {...props} routes={routes} />
          }
          return <Redirect to={{ pathname, state: { from: props.location } }} />
        }}
      />
    )
  }
}
export default withAuthRoute
