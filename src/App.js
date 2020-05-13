import React from "react"
import { Switch, Link } from "react-router-dom"
import "./App.css"

import PublicRoute from "./router/PublicRoute"
import routes from "./router"

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route, i) => (
          <PublicRoute key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
