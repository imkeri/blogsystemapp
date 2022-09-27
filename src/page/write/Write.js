import axios from 'axios'
import React, { useState } from 'react'
import './write.css'
import { baseurl } from '../../baseurl'
const Write = () => {
    const [data, setData] = useState([{
        Auth_name: "",
        category: "",
        title: "",
        description: ""
    }])

    const Postadded = async (e) => {
        e.preventDefault();
        await axios.post(`${baseurl}/blog/insertBlog`, data)
            .then(res => {
                console.log(res)

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
     <input type="text" placeholder="Athor Name" name='Auth_name' onChange={(e)=>handle(e)} value={data.Auth_name}></input><br></br>
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
