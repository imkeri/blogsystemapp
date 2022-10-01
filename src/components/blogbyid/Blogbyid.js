import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useParams ,Link} from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import { baseurl } from '../../baseurl'
import './blogbyid.css'
import Cookies from 'js-cookie';
const Blogbyid = () => {
  const stat = localStorage.getItem('setfollowStatus')
  console.log("stat",stat)
    const [data,setData] = useState([]);
    const [like,setLike] = useState(1);
    const [val,setval] = useState(true)
    const [like_num,setLike_num] = useState()
    const [status,setStatus] =useState(stat)
    const userid = Cookies.get('id')
    const params = useParams()
    const id = params.id
    
console.log(id)
     const getbyid =()=>{
       try {
        axios.get(`${baseurl}/blog/viewblogById/${id}`)
        .then((res)=>{
            console.log("........blogbyid",res.data.data)
            setData(res.data.data)
        })
       } catch (error) {
         console.log("error",error)
       }
     }
     useEffect(()=>{
        getbyid()
     },[])

    //  end viewbyid
    const likeblog=(e)=>{
      try {
       console.log("hello")
        axios.put(`${baseurl}/blog/addlikedislike/${id}`,like)
        .then((res)=>{
          console.log("res....",res.data.data)
          setLike_num(res.data.data)
          setval(false)
          console.log(".....",like_num.like)
        }).catch((err)=>{
          console.log("error...",err)
        })
      } catch (error) {
        console.log("error",error)
      }
    
    }
    // sendRequest
    const sendRequest =()=>{
      try {
        axios.put(`${baseurl}/follow/addfollow/${userid}/${id}`)
        .then((res)=>{
            console.log("........follow",res.data.data)
            const setval = res.data.data
            console.log(setval.followStatus)
            localStorage.setItem('setfollowStatus',setval.followStatus)
            const  status = localStorage.getItem('setfollowStatus')
            setStatus(status)
            
        }).catch((err)=>{
          console.log("..err",err.message)
          alert("")
        })
       } catch (error) {
         console.log("error",error)
       }
    }


      

  return (
    <div className='blog_detail container-fluid'>
      <div className='row'>
        <div className='col-md-8 blog1'>
           <div className='blog_line1 '>
             <div className='d-flex'>
             <img src='/image/2.jpg' alt='p1'></img>
              <div >
              <p>{data.Auth_name}</p>
              <p>Sep 22 .6min read</p>
              </div>
             </div>
           </div>
           <div className='blog_line2'>
           <h1>{data.title}</h1>
           <p>{data.description}</p>

           <img src="/image/3.jpg" className='blog_img'></img>
            <p className='details'>All this hardware hacking has taught me quite a bit about the state of repair-age in laptops today. I’ve learned that some machines are easier to repair than others, because they were designed to be opened up and to have components swapped in and out. Gaming laptops like my son’s? Usually quite repairable: They’re roomier inside and the parts are pretty modular, because it’s assumed that gamers might want to upgrade components. But many other devices I’ve owned were designed for skinniness — like Mac laptops in recent years, or Ipads and many phones. Those things are nightmares, and occasionally flat-out impossible to repair: Components aren’t modular, or are glued in place (to make things sleeker, but thereby also making them unremovable). Kyle Wiens and the folks at iFixit have been doing superb rankings of the fixability of devices for years now.</p>
           </div> 
            <div className='like d-flex'>
              <FavoriteIcon onClick={(e)=>likeblog(e)}/> <span> {
                val ? <>{data.like}</> : <>{like_num.like}</>
              }</span>
            </div>
        </div>
        <div className='col-md-4 pt-5 side_atho'>
             <div>
             <button className='auth_btn'><Link to="/ragistration">Get started</Link></button>
             <snap className='Signin'>Sign In</snap>
             <div className='d-flex inputfield'>
                <snap><SearchOutlinedIcon className='icon'/></snap>
                <input type="text" placeholder='search'></input>
             </div>
              <div className='d-flex auth_detail'>
              <img src='/image/2.jpg' alt='p1'></img>
              <Link to={`/authdetail/${data.UserId}`}>{data.Auth_name}</Link>
              <Link to={`/authdetail/${data.UserId}`}><h5>5 Followers</h5></Link>
              <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
              <div className='d-flex btns'>
              <button className="follow" onClick={(e)=>sendRequest(e)}>{status ? "Following" : "Follow"}</button>
              <Link to={`/authdetail/${data.UserId}`} className="icon"><MessageIcon/></Link>
              </div>
              </div>
             </div>
        </div>
        

      </div>
    </div>
  )
}

export default Blogbyid
