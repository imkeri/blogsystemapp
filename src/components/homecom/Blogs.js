import React from 'react'
import './blog.css'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
const Blogs = () => {
  return (
    
      <div className='row'>
        <div className='col-md-8 col-xl-7'>
        <div className='tranding_new'>
            <div className='first_line-1'>
              <img src='image/1.jpg' alt='p1'></img>
              <p>Tom Cooper</p>
            </div>
            <div className='middle_line-1'>
            <h3>The best collection of neatly designed  blog</h3>
            <h4>of neatly designed and carefully develope</h4>
            </div>
            <div className='last_line-1'>
              <p>Sep 21.2017 2 min read .</p> 
              <p className='blog_dis'>Desing</p>
              
            </div>
       </div>
        </div>
        <div className='col-md-5 blog_img d-flex'>
        <p className='blog_save_icon'>
        <TurnedInNotIcon className='icon'/></p>
            <img src='image/2.jpg' alt='p2'></img>
        </div>
      </div>
    
  )
}

export default Blogs
