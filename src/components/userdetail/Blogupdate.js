import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseurl } from '../../baseurl'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'


const Blogupdate = () => {
   const params = useParams()
   console.log("params",params.id)
    const [data, setData] = useState([{
        Auth_name: "",
        category: "",
        title: "",
        description: ""
    }])
    const getbyid =()=>{
      try {
       axios.get(`${baseurl}/blog/viewblogById/${params.id}`)
       .then((res)=>{
           console.log("........",res.data.data)
           setData(res.data.data)
       })
      } catch (error) {
        console.log("error",error)
      }
    }
    const id = Cookies.get('id')
    const updateblog = async (e) => {
        e.preventDefault();
        await axios.put(`${baseurl}/blog/updateblog/${params.id}`, data)
            .then(res => {
                console.log(res)
                window.location="/"

            }).catch((error) => {
                alert(error.response.data.message)
            })
    }

    const handle = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })

    }
    useEffect(()=>{
      getbyid()
   },[])
  return (
    <div className='write'>
     <div className='write_blog'>
     <form onSubmit={(e)=>updateblog(e)}>
     <input type="text" placeholder="cetegory" name='category' onChange={(e)=>handle(e)} value={data.category}></input><br></br>
      <input type="text" placeholder="Title.." name="title" onChange={(e)=>handle(e)} value={data.title}></input><br></br>
      <textarea type="text" placeholder="Discription.." name="description" onChange={(e)=>handle(e)} value={data.description}
      ></textarea>
      <button className='post'>Post</button>
     </form>
     </div>
    </div>
  )
}

export default Blogupdate
