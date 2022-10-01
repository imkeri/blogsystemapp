import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const Userblog = (props) => {


  return (
    
      <div className='row'>
        <div className='col-md-8 col-xl-7'>
        <div className='tranding_new'>
            <div className='first_line-1'>
              <img src='/image/1.jpg' alt='p1'></img>
              <p>{props.Auth_name}</p>
            </div>
            <div className='middle_line-1'>
            <h3><Link to={`detail/${props.id}`}>{props.title}</Link></h3>
            <h4>{props.description}</h4>
            </div>
            <div className='last_line-1'>
              <p>Sep 21.2017 2 min read .</p> 
              <p className='blog_dis'>{props.category}</p>
            </div>
       </div>
        </div>
        <div className='col-md-5 blog_img d-flex'>
         <p className='blog_save_icon'><Link to={`${props.id}`}><EditIcon/></Link> </p>
         <img src='/image/2.jpg' alt='p2'></img>

        </div>
      </div>
    
  )
}

export default Userblog
