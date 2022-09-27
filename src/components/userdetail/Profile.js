import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import './profile.css'
import Cookies from 'js-cookie'
import axios from 'axios'
import { baseurl } from '../../baseurl'
const Profile = () => {

  // view by email
  const [data,setData] =useState([{
       Auth_name: "",
        phone: "",
        email: "",
        age: "",
  }])
  const email = Cookies.get('email')


  const Viewbyemail = () => {
    try {
      axios.get(`${baseurl}/user/userviewbyemail/${email}`)
        .then((res) => {
          console.log("res....", res.data.data)
          setData(res.data.data)
        })

    } catch (error) {
      console.log("error", error)
    }
  }

  // updateuser

  const updateuser =(e)=>{
    e.preventDefault()

   try {
      axios.put(`${baseurl}/user/updateUser/${data._id}`,data)
      .then((res)=>{
        console.log("res.......",res);
        
        Viewbyemail();
        
        
      }).catch((err)=>{
        console.log("error",err)
      })
   } catch (error) {
    console.log("error",error)
   }

  }

  const handle =(e)=>{
     const {name,value} = e.target
     setData({...data,[name]:value})
  }

  useEffect(() => {
    Viewbyemail()
   
  }, [])

  return (
    <div className='body'>
      <Sidebar />
      <div className='user_part'>
        <section className='userprofile'>
          <div className='profile_detail'>
            <div><h3>About you</h3><hr></hr></div>
            <div>
              <form method='post'>
                <div className='name_input'>
                  <label>Name</label>
                  <input type="text" name="Auth_name" value={data.Auth_name} onChange={(e)=>handle(e)}></input>
                  <p>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                </div>
                <button className='editbtn' onClick={(e)=>updateuser(e)}>Edit</button>
              </form><br></br>
              <form method='post'>
                <div className='name_input'>
                  <label>Phone</label>
                  <input type="text" name="phone" value={data.phone} onChange={(e)=>handle(e)}></input>
                  <p>Your name appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                </div>
                <button className='editbtn' onClick={(e)=>updateuser(e)}>Edit</button>
              </form>
              <br></br>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Profile
