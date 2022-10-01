import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseurl } from '../../baseurl';
import Blogs from '../homecom/Blogs';
import './blogbyauth.css'
import axios from 'axios';
import BlogByAuthName from './BlogByAuthName';
const MainAuth = () => {
    const [auth, setAuth] = useState([]);
    const params = useParams();
    const id = params.id
    console.log('authnameeee', id);

    const getByAuthname = () => {
        try {
            axios.get(`${baseurl}/blog/blogByUserId/${id}`).
                then((res) => {
                    console.log("ressss...s.s.", res.data.data);
                    setAuth(res.data.data);
                })
        } catch (error) {
            console.log("errrrrrrrrr....", error);
        }
    }
    useEffect(() => {
        getByAuthname();
    }, []);
    return (
        <>
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
                         <div className="tab-content py-3" id="myTabContent">
                              <div className="tab-pane fade " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">hello.</div>
                              <div className="tab-pane fade show active " id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                   {
                                    auth.map((val,key)=>{
                                        return <>
                                        <Blogs
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
                             
                         </div>
                    </div>
        </>
    );
}

export default MainAuth;
