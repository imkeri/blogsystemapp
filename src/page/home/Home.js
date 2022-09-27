import React, { useEffect, useState } from 'react'
import "./home.css"
import Header from '../../components/homecom/Header'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Tranding from '../../components/homecom/Tranding';
import Blogs from '../../components/homecom/Blogs';
import Fixedcon from '../../components/homecom/Fixedcon';
import axios from 'axios';
import { baseurl } from '../../baseurl';
const Home = () => {

     const [data,setDate] = useState([]);
     // view all blog

       const getallblog = () =>{
          try {
               axios.get(`${baseurl}/blog/allBlog`)
               .then((res)=>{
                    console.log("response...",res.data.data);
                    setDate(res.data.data);
               })
          } catch (error) {
               console.log("error",error)
          }
       }

       useEffect(()=>{
          getallblog();
       },[])

  return (
    <div>
      <Header />
      <div className='container pt-5'>
         <div className='tranding_media'>
         <span><ShowChartIcon className='tranding_icon'/> </span> <span className='tranding_text'> Tranding on Medium</span>
         </div>
         <div className='row'>
          <Tranding/>
          <Tranding/>
          <Tranding/>
          <Tranding/>
          <Tranding/>
          <Tranding/>
         </div>
      </div>
      <hr></hr>
      <div className='container pt-5 f1'>
           <div className='b1'>
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
                    </>
               })
              }
               
           </div>
           <div className='b2'>
           <Fixedcon />
           </div>

      </div>
    </div>
  )
}

export default Home
