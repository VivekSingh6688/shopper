import React, { useState } from 'react'
import './CSS/loginsignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginSignup = () => {

  
    const [name , setname] =useState('')
    const [email , setemail] =useState('')
    const [password , setpassword] =useState('')
    const navigate = useNavigate()

    const handlesubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/signup',{name,email,password})
        .then(result => {console.log(result)
             alert("Sign up success , now Login")
        navigate('/login')
        
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='loginsignup '>
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <form onSubmit={handlesubmit}>
                <div className="loginsignup-fields">
                    <input name='name'  type="text" placeholder='your name' onChange={ (e) => setname(e.target.value) }/>
                    <input name='email'  type="email" placeholder='email address' id="" onChange={(e) => setemail(e.target.value) }/>
                    <input name='password' type="password" placeholder='password' onChange={ (e) => setpassword(e.target.value) }/>
                </div>
                <button type='submit'>Sign up</button>
                </form>
                <p className='loginsignup-login'>Already have an account? <span><Link style={{ textDecoration: 'none', color: "red"  }} to="/login">Login here</Link></span></p>
            </div>
        </div>
        
    )
}

export default LoginSignup
