import React from 'react'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
         <div className="input">
            <div className="input">
                <input type='text'/>
            </div>
            <div className="input">
                <input type='email'/>
            </div>
            <div className="input">
                <input type='password'/>
            </div>
         </div>
         <div className="submit-container">
            <div className="submit"></div>
         </div>
    </div>
  )
}

export default LoginSignup
