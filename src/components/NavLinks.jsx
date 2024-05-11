import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({icon , title , link}) => {
  return (
    <Link to={link}>
        {/* icon  */}
        <span><img src={icon} alt="logo" /></span>
        {/* title  */}
        <div>{title}</div>
    </Link>
  )
}

export default NavLinks