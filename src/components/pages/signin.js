import React from 'react'
import '../Tennis/tennis.css'
import '../Soccer/soccer.css'
import '../css/quiz.css'
import logo from '../Images/SportsGrading.svg';
import {Link} from 'react-router-dom'
import {FaChevronLeft} from 'react-icons/fa';
import {BsChevronDoubleLeft} from 'react-icons/bs'

function SigninPage() {
    return (
        <div className="form-page">
           <div className="logo-header">
                <Link to="/" className="logo-btn"   > <FaChevronLeft className="icon" /> </Link>
                <img src={logo} alt=""className="logo"/>
                <Link className="logo-btn"><BsChevronDoubleLeft className="icon icon-2"/></Link>
                </div>

         
            
        <form className="form">
        <p className="strong">Thanks for opting into our free sports tips</p>
           <p>We dont't spam</p>
           <p>It is not our style</p>
           <p>You can opt out anytime</p>
          <input type="text" placeholder="Name"/>  
          <input type="email" placeholder="Email"/>
         <Link to="/"> <button className="submit" type="submit">Send</button></Link>
        </form>
          
         
        </div>
    )
}

export default SigninPage
