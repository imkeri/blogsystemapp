import axios from 'axios'
import React, { useState } from 'react'
import './write.css'
import { baseurl } from '../../baseurl'
import Cookies from 'js-cookie'
const Write = () => {
    const [data, setData] = useState([{
        Auth_name: "",
        category: "",
        title: "",
        description: ""
    }])
    const id = Cookies.get('id')
    const Postadded = async (e) => {
        e.preventDefault();
        await axios.post(`${baseurl}/blog/insertBlog/${id}`, data)
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
  return (
    <div className='write'>
     <div className='write_blog'>
     <form onSubmit={(e)=>Postadded(e)}>
     <input type="text" placeholder="cetegory" name='category' onChange={(e)=>handle(e)} value={data.category}></input><br></br>
      <input type="text" placeholder="Title.." name="title" onChange={(e)=>handle(e)} value={data.title}></input><br></br>
      <textarea type="text" placeholder="Discription.." name="description" onChange={(e)=>handle(e)} value={data.description}></textarea>
      <button className='post'>Post</button>
     </form>
     </div>
    </div>
  )
}

export default Write
