import React, { useState } from "react"
import { Switch } from "react-router-dom"
import "./App.css"
import PublicRoute from "./router/PublicRoute"
import routes from "./router"
import WrapperLayout from "./components/WrapperLayout"
import MyContext from "./context"

function App() {
  const [mode, setMode] = useState(false)
  return (
    <MyContext.Provider value={{ mode, setMode }}>
      <WrapperLayout classes={`${mode ? "light" : "dark"}`}>
        <Switch>
          {routes.map((route, i) => (
            <PublicRoute key={i} {...route} />
          ))}
        </Switch>
      </WrapperLayout>
    </MyContext.Provider>
  )
}

export default App
