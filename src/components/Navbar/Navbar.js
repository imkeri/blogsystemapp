//import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../Navbar/navbar.css"
import React from 'react'
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import axios from 'axios';
import { baseurl } from '../../baseurl';
const Navbar = () => {

  const logout = (e) => {
    try {
      console.log("hello")
      axios.get(`${baseurl}/user/logout`)
        .then((res) => {
          console.log(res)
        })
    } catch (error) {
      console.log("error.....", error)
    }
  }

  return (
    <div className='nav'>
      <nav id="header" className="navbar">
        <div className='logo'>
          <FiberSmartRecordIcon className='logo_icon' /><spna ><Link to="/" className="logo_text">Medium</Link></spna>
        </div>
        <ul className='navbar'>
          <li><NavLink to="/">Our story</NavLink></li>
          <li><NavLink to="/">MemberShip</NavLink></li>
          <li><NavLink to="/write">write</NavLink></li>
          <li><NavLink to="/signin">sign in</NavLink></li>
          <li className='logout' onClick={(e) => logout(e)}>Sign Out</li>
          <button className='btn1'><Link to="/ragistration">Get started</Link></button>

        </ul>
      </nav>
    </div>

  )
}

export default Navbar
