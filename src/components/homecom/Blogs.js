import React, { useState } from 'react'
import './blog.css'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../../baseurl';
import Cookies from 'js-cookie';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const Blogs = (props) => {

 
 
  const [data,setdata] = useState(false)
  const email = Cookies.get('email')
  
  const Bookmark =(id)=>{
    console.log(id)
  
      axios.put(`${baseurl}/blog/addbookmark/${email}/${id}`)
    .then((res)=>{
      console.log("res....",res.data)
      const setval = res.data.data
      setdata(setval.bookmark)
      
    }).catch((err)=>{
      console.log("error",err);
    })
   

  }
  return (
    
      <div className='row' id={props.key}>
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
         {
          data ? <p className='blog_save_icon'><BookmarkIcon className='icon' onClick={()=>Bookmark(props.id)}/></p>
          : <p className='blog_save_icon'><TurnedInNotIcon className='icon' onClick={()=>Bookmark(props.id)}/></p>
         }
         
        <img src='/image/2.jpg' alt='p2'></img>


           
        </div>
      </div>
    
  )
}

export default Blogs
