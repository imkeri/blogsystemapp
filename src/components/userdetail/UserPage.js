import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Blogs from '../homecom/Blogs'
// import Tranding from '../homecom/Tranding'
import Sidebar from './Sidebar'
import { baseurl } from '../../baseurl'
import './userpage.css'
import Cookies from 'js-cookie'
import Userblog from './Userblog'
const UserPage = () => {
     const [data, setData] = useState([])
     const id = Cookies.get('id')
     console.log("id....",id)
     const getallblog = () => {
          try {
               axios.get(`${baseurl}/blog/blogByUserId/${id}`)
                    .then((res) => {
                         console.log("response...", res.data.data);
                         setData(res.data.data);
                    }).catch((err)=>{
                         console.log("error",err)
                    })
          } catch (error) {
               console.log("error", error)
          }
     }

     useEffect(() => {
          getallblog();
     }, [])

     return (
          <div className='body'>
               <Sidebar />
               <div className='user_part'>
                    <div className='container p-5'>
                         <ul className="nav nav-tabs" id="myTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                   <button className="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">+</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                   <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">for you</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                   <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Following</button>
                              </li>
                         </ul>
                         <div className="tab-content" id="myTabContent">
                              <div className="tab-pane fade" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">hello.</div>
                              <div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                   {
                                        data.map((val,key)=>{
                                        return <>
                                        <Userblog
                                           key = {key}
                                           id={val._id}
                                           Auth_name={val.Auth_name} 
                                           category={val.category}
                                           title={val.title}
                                           description={val.description}
                                           />
                                         <hr></hr>
                                        </>
                                        })
                                   }<br></br>
                                   
                              </div>
                              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">keri</div>
                              <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default UserPage
