import React from 'react'
import './tranding.css'

const Tranding = (props) => {
  return (
    <div className='col-md-4 tranding mb-4'>
       <div className='count'><h1>01</h1> </div>
       <div className='tranding_new'>
            <div className='first_line'>
              <img src='image/1.jpg' alt='p1'></img>
              <p>{props.Auth_name}</p>
            </div>
            <div className='middle_line'>
            <h3>{props.title}</h3>
            </div>
            <div className='last_line'>
              <span>Sep 21. 2 min read</span>
            </div>
       </div>
    </div>
  )
}

export default Tranding
