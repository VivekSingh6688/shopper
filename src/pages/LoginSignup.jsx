import React from 'react'
import './CSS/loginsignup.css'
const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='your name' />
                    <input type="email" placeholder='email address' id="" />
                    <input type="password" placeholder='password' />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id='' />
                    <p>By continuing , i agree to the terms and use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
