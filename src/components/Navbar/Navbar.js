//import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Navbar/navbar.css"
import React, { useState } from 'react'
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

const Navbar = () => {

  return (
    <div className='nav'>
        <nav id="header" className="navbar">
          <div className='logo'>
             <FiberSmartRecordIcon className='logo_icon'/><spna className="logo_text">Medium</spna>
          </div>
           <ul className='navbar'>
            <li><NavLink to="/">Our story</NavLink></li>
            <li><NavLink to="/">MemberShip</NavLink></li>
            <li><NavLink to="/">write</NavLink></li>
            <li><NavLink to="/">sign in</NavLink></li>
            <li className='btn1'>Get started</li>
           </ul>
        </nav>
      </div>

  )
}

export default Navbar
