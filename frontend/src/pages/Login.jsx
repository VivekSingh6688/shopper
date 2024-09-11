import React, { useState } from 'react'
import './CSS/loginsignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginSignup = () => {

  
    const [email , setemail] =useState('')
    const [password , setpassword] =useState('')
    const navigate = useNavigate()

    const handlesubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)
          if(result.data === "success"){
            alert("you are sucessfull logged in")
            navigate('/')
          } else{
            alert("wrong details")
          }
        
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='loginsignup '>
            <div className="loginsignup-container">
                <h1>Login</h1>
                <form onSubmit={handlesubmit}>
                <div className="loginsignup-fields">
                    
                    <input name='email'  type="email" placeholder='email address' id="" onChange={(e) => setemail(e.target.value) }/>
                    <input name='password' type="password" placeholder='password' onChange={ (e) => setpassword(e.target.value) }/>
                </div>
                <button type='submit'>Login</button>
                </form>
                <p className='loginsignup-login'>Don't have an account <span><Link style={{ textDecoration: 'none', color: "red"  }} to="/signup">Sign up</Link></span></p>
                
            </div>
        </div>
        
    )
}

export default LoginSignup
