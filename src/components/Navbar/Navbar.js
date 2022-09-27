//import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../Navbar/navbar.css"
import React from 'react'
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import axios from 'axios';
import { baseurl } from '../../baseurl';
import Cookies from 'js-cookie'

const Navbar = () => {


  const token = Cookies.get('jwt')
  console.log("tpoken..", token)

  const logout = (e) => {
    try {

      axios.post(`${baseurl}/user/logout/${token}`,)
        .then((res) => {
          console.log("res.....",res)
          Cookies.remove('jwt')
          Cookies.remove('email')
          window.location= "/signin"
        }).catch((er)=>{
          console.log("error",er)
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
          {
            token ? <li><NavLink to=" "onClick={(e) => logout(e)}>sign out</NavLink></li>:
              <li><NavLink to="/signin">sign in</NavLink></li>
          }


          <button className='btn1'><Link to="/ragistration">Get started</Link></button>

        </ul>
      </nav>
    </div>

  )
}

export default Navbar
