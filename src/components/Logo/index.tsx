import React from 'react'
import './Logo.css'
import { logo } from '../../assets'
const Logo = () => {
  return (
    <div className="flex__center logo">
      <img src={logo} alt="" />
    </div>
  )
}

export default Logo
