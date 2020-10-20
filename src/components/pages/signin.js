import React from 'react'
import '../css/quiz.css'
import logo from '../Images/Sports.svg';
import {Link} from 'react-router-dom'


function SigninPage() {
    return (
        <div className="form-page">
           <div className="logo-header">
                <Link to="/">
                 <img src={logo} alt=""className="logo"/>
                 </Link>
                </div>
        <form className="form">
           <h3 className="strong">Thank you for Opting in</h3>
           <p>We don't spam, it is not our style</p>
           <p>You can opt out anytime</p>
          <input type="text" placeholder="Name"/>  
          <input type="email" placeholder="Email"/>
         <Link to="/"> <button className="submit" type="submit">Send</button></Link>
        </form>
        </div>
    )
}

export default SigninPage
