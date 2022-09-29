import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseurl } from '../../baseurl'
import './fixedcon.css'
const Fixedcon = () => {

  const [userCount,setUserCount] = useState('')
  const [Blog,setBlog] = useState('')
  const [dayCount,setdayCount] = useState('')

  // --------------totaluser

    const totaluser =async()=>{
      try {
        await axios.get(`${baseurl}/user/totalUser`)
        .then((res)=>{
          console.log("res..",res.data.data);
          setUserCount(res.data.data)
        }).catch((err)=>{
          console.log("error...",err)
        })
      } catch (error) {
        console.log("error",error)
      }
    }

    // total blog

    const totalBlog =async()=>{
      try {
        await axios.get(`${baseurl}/blog/totalBlog`)
        .then((res)=>{
          console.log("res..",res.data.data);
          setBlog(res.data.data)
        }).catch((err)=>{
          console.log("error...",err)
        })
      } catch (error) {
        console.log("error",error)
      }
    }

    // totalday

    const totalday =async()=>{
      try {
        await axios.get(`${baseurl}/user/totalDays`)
        .then((res)=>{
          console.log("res..",res.data.data);
          setdayCount(res.data.data)
        }).catch((err)=>{
          console.log("error...",err)
        })
      } catch (error) {
        console.log("error",error)
      }
    }


    useEffect(()=>{
      totaluser();
      totalBlog();
      totalday();
    },[])

 
  return (
    <div className='fixeddata'>
      <div className='q-1'>
         <h1>{dayCount}</h1>
         <h5>Day</h5>
      </div>
      <div className='q-2'>
         <h1>{userCount}</h1>
         <h5>Users</h5>
      </div>
      <div className='q-3 '>
         <h1 >{Blog}</h1>
         <h5>Blogs</h5>
      </div>
      <div className='q-4'>
         <h1>54</h1>
         <h5>day</h5>
      </div>

    </div>
  )
}

export default Fixedcon
