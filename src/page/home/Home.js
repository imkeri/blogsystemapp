import React from 'react'
import "./home.css"
import Header from '../../components/homecom/Header'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Tranding from '../../components/homecom/Tranding';
import Blogs from '../../components/homecom/Blogs';
import Fixedcon from '../../components/homecom/Fixedcon';
const Home = () => {
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
           {/* <div className='row blog_info'>
           <div className='col-md-8 pb-5'>
                <Blogs />
                <Blogs/>
                <Blogs />
                <Blogs/>
                <Blogs />
                <Blogs/>
           </div>
           <div className='col-md-4 pb-5 fixe'>
                <Fixedcon />
           </div>

          
           </div> */}


           <div className='b1'>
           <Blogs />
                <Blogs/>
                <Blogs />
                <Blogs/>
                <Blogs />
                <Blogs/>
           </div>
           <div className='b2'>
           <Fixedcon />
           </div>

      </div>
    </div>
  )
}

export default Home
