import React, { useState, useEffect } from 'react'
import "./login.css"
import logo from "../../images/logo.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [errors, seterrors] = useState('Login');
    const [LoginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate()

    const login = async () => {

        try {
            const { data } = await axios.post("http://localhost:5555/api/users/login", {
                email: username,
                password: password
            })
            console.log(data)
            if (!data.token) {
                setLoginStatus(false)
                alert("wrong")
            }
            else {
                localStorage.setItem("token", JSON.stringify(data))
                setLoginStatus(true);
                navigate(-1);


            }
        } catch (error) {
            console.log(error.response.data)
            seterrors(error.response.data[0].messageKR)
        }
        // .then((response) => {
        //   

        // })
    };
    return (
        <div className='login-container'>
            <div className='login-logo '>

                <img src={logo} alt="header" />

            </div>
            <div className='login-input'>
                <div className="login bd">
                    <div className="form">
                        <h2>{errors}</h2>
                        <input type="text" onChange={e => setusername(e.target.value)} placeholder="Username" />
                        <input type="password" onChange={e => setpassword(e.target.value)} placeholder="Password" />
                        <input onClick={login} value="Sign In" className="submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login