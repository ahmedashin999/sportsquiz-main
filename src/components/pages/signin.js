import React from 'react'
import '../Tennis/tennis.css'
import '../Soccer/soccer.css'
import '../css/quiz.css'
import logo from '../Images/SportsGrading.svg';
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
           <h3 className="strong">Thank you for Optiong in</h3>
           <p>We dont't spam, it is not our style</p>
           <p>You can opt out anytime</p>
          <input type="text" placeholder="Name"/>  
          <input type="email" placeholder="Email"/>
         <Link to="/"> <button className="submit" type="submit">Send</button></Link>
        </form>
        </div>
    )
}

export default SigninPage
