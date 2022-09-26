import React, { useState } from 'react'
import './signin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseurl } from '../../baseurl'
const Signin = () => {
    const [data, setData] =useState([{
        email: "",
        password: ""
    }])

    const login =async(e)=>{
        e.preventDefault();
       try {
        console.log("data....",data);
        await axios.post(`${baseurl}/user/login`,data)
        .then((res)=>{
            console.log("....",res.data);
            const token = localStorage.getItem('token')
            console.log("tokennnnn",token)
            if(token =="undefined" || token===null)
            {
                console.log("hello")
                localStorage.setItem("token",res.data.token)
            }
            
            window.location="/"
        })
       } catch (error) {
        console.log("error..",error)
       }
    }


    const handle = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })

    }
    return (
        <div>
            <div id='main_box'>
                <div className="box">
                    <h3 className='text-center'>Sign In</h3>
                    <form method="" action="" name='Login' onSubmit={(e) => login(e)} >
                        <input type="text" placeholder='Email' name="email" value={data.email} onChange={(e) => handle(e)} />
                        <input type="text" placeholder='password' name="password" value={data.password} onChange={(e) => handle(e)} />
                        <div className='checkbox'>
                            <input type="checkbox" className='chk' style={{ height: "15px", width: "30px" }}></input><p>Agree with Terms & condition</p>
                        </div>
                        <button type='submit' className="Login_btn">Sign In</button>
                        <br></br>
                        <Link to="/ragistration" className="text-center">Create a new account ?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
