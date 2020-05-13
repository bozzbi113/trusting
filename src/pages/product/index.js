import React from "react"
import { Route, Switch, Link } from "react-router-dom"
import "./style.scss"
function Product(props) {
  const { routes } = props

  return (
    <div>
      <h2>Product</h2>
      <ul>
        <li>
          <Link
            to={{
              pathname: "/product/bus",
            }}
          >
            Bus
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/product/cart",
            }}
          >
            Cart
          </Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} routes={route.routes} />
        ))}
      </Switch>
    </div>
  )
}
export default Product
