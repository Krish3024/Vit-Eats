import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign-Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="Login"?<></>:<input type="text" placeholder='your name' required />}
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currState==="Sign-Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing i agree to the terms of use & privacy policy</p>    
        </div>
        {currState==="Login"
        ?<p>Create a new Account <span onClick={()=> setCurrState("Sign-Up")}>Click Here</span> </p>
        :<p>Already Have an Account? <span onClick={()=> setCurrState("Login")}>Login Here</span> </p> }
        
      </form>
    </div>
  )
}

export default LoginPopup
