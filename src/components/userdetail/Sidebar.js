import React from 'react'
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
      <div className='sidebar'>
         <div className='logo_icon'>
           <FiberSmartRecordIcon className='licon'/>
         </div>
         <div className='all_icon'>
           <Link to=""><HomeIcon className='aicon' /></Link>
           <Link to=""><NotificationsIcon className='aicon'/></Link>
           <Link to="/write"><AddIcon className='aicon'/></Link>
         </div>
         <div className='user_icon'>
            <Link to="/userprofile"><AccountCircleIcon className='uicon'/></Link>
         </div>
      </div>
  )
}

export default Sidebar
