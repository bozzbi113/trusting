import React, { useState, useCallback } from "react"
import "./style.scss"
import { airBnb, menu } from "../../assets/icons/index"
import Toggle from "../Toggle"
import { useDevice } from "../../hooks/useDevice"
import { useOnOutsideClick } from "../../hooks/useOnOutsideClick"
let menuRef = React.createRef()
const Header = React.memo(({ classes }) => {
  const { isMobile } = useDevice()
  const [isOpen, setOpen] = useState(false)

  const handleClickOutSideMenu = () => {
    //Close menu
    setOpen(false)
  }

  useOnOutsideClick(handleClickOutSideMenu, menuRef)

  const handleOpenMenu = useCallback(() => {
    //open change menu status†
    setOpen(!isOpen)
  }, [isOpen])

  return (
    <div className={`header ${classes}`}>
      <img alt="logo" className="header__logo" src={airBnb} />
      {isMobile && (
        <div className="header__menu">
          <img alt="menu" onClick={handleOpenMenu} ref={menuRef} src={menu} />
        </div>
      )}
      <div
        className={`header__nav ${
          isMobile ? (isOpen ? "header__nav--open" : "header__nav--close") : ""
        }`}
      >
        <ul>
          <li>
            <Toggle />
          </li>
          <li>Become a host</li>
          <li>Help</li>
          <li>Sign up</li>
          <li>Log in</li>
        </ul>
      </div>
    </div>
  )
})

export default Header
