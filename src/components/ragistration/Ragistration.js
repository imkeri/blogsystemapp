import axios from 'axios'
import React, { useState } from 'react'
import './ragistration.css'
import { baseurl } from '../../baseurl'
const Ragistration = () => {
    const [data, setData] = useState([{
        Auth_name: "",
        phone: "",
        email: "",
        age: "",
        password: ""
    }])

    const ragistration = async (e) => {
        e.preventDefault();
       try {
        await axios.post(`${baseurl}/user/userregister`, data)
        .then(res => {
            console.log(res)
            window.location="/signin"

        }).catch((error) => {
            alert(error)
        })
       } catch (error) {
        console.log("error",error)
       }
    }

    const handle = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })

    }
    return (
        <div>
            <div id='main_box'>
                <div className="main2">
                    <div className="box3">
                        <h3 className='text-center'>Registration</h3>
                        <form method="" action="" name='ragistration' onSubmit={(e) => ragistration(e)}  >
                            <input type="text" placeholder='Athor Nmae' name="Auth_name" value={data.Auth_name} onChange={(e) => handle(e)} />
                            <input type="text" placeholder='Age' name="age" value={data.age} onChange={(e) => handle(e)} />
                            <input type="text" placeholder='Phone no' name="phone" value={data.phone} onChange={(e) => handle(e)} />
                            <input type="text" placeholder='Email' name="email" value={data.email} onChange={(e) => handle(e)} />
                            <input type="password" placeholder='password' name="password" value={data.password} onChange={(e) => handle(e)} />
                            <button type='submit' className="ragistration_btn"> Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ragistration
