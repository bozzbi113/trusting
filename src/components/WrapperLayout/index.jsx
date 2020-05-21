import React from "react"
import "./style.scss"
import Header from "../Header"

const WrapperLayout = React.memo((props) => {
  const { children, classes } = props
  return (
    <div className={`wrapper-layout ${classes}`}>
      <Header />
      <div className="wrapper-layout__content">{children}</div>
    </div>
  )
})

export default WrapperLayout
