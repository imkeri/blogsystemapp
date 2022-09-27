import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blogs from '../homecom/Blogs'
import Sidebar from './Sidebar'
import { baseurl } from '../../baseurl'
import './userpage.css'
const UserPage = () => {
  const [data,setData] = useState([])
  const getallblog = () =>{
    try {
         axios.get(`${baseurl}/blog/allBlog`)
         .then((res)=>{
              console.log("response...",res.data.data);
              setData(res.data.data);
         })
    } catch (error) {
         console.log("error",error)
    }
 }

 useEffect(()=>{
    getallblog();
 },[])

  return (
    <div className='body'>
       <Sidebar />
       <div className='user_part'>
         <div className='container p-3'>
          <div className='d-flex '>
            <button className='btn1' style={{color:'white'}}>for you</button>
          </div>
          <hr></hr>

         {
               data.map((val)=>{
                    return <>
                    <Blogs
                         id={val._id}
                         Auth_name={val.Auth_name} 
                         category={val.category}
                         title={val.title}
                         description={val.description}

                    />
                    <hr></hr>
                    </>
               })
              }
         </div>
       </div>
    </div>
  )
}

export default UserPage
