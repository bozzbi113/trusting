import React from "react"
import "./style.scss"
import { useContext } from "react"
import { toggle, night, sunny } from "../../assets/icons/index"
import MyContext from "../../context"
import { useCallback } from "react"

const Toggle = React.memo(({ classes }) => {
  const { mode, setMode } = useContext(MyContext) || {}

  const handleChangeMode = useCallback(() => {
    setMode(!mode)
  }, [mode, setMode])

  return (
    <div onClick={handleChangeMode} className={`toggle-wrapper ${classes}`}>
      <img
        className={`toggle-wrapper__toggle ${
          mode ? "toggle-wrapper--light" : "toggleWrapper--dark"
        }`}
        alt="toggle"
        src={toggle}
      />
      <img alt="night" src={night} />
      <img alt="sunny" src={sunny} />
    </div>
  )
})

export default Toggle
