import React, { useState } from 'react'
import './NavBar.css'
import Logo from '../../components/Logo'
import { navigation } from '../../source'
import { Link } from 'react-scroll'
import ThemeToggle from '../../components/ThemeToggle'
import { TiThMenu } from 'react-icons/ti'
import SideBar from '../../components/SideBar'
import useNavbar from '../../hook/useNavbar'

const NavBar = () => {
  const { showNavbar } = useNavbar()
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <SideBar openSidebar={openSidebar} onClose={() => setOpenSidebar(!openSidebar)} />
      <nav id="navbar" className={`flex__center ${showNavbar ? 'drop' : ''}`}>
        <Logo />
        <div className="flex nav__routers">
          {navigation.map((list: any, index: any) => (
            <Link
              to={list.id}
              smooth={true}
              spy={true}
              offset={-50}
              className="route"
              activeClass="active"
              key={index}>
              {list.name}
            </Link>
          ))}
        </div>

        <div className="flex__center">
          <ThemeToggle />
          <div className="icon__container menu_btn" onClick={() => setOpenSidebar(!openSidebar)}>
            <TiThMenu />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
