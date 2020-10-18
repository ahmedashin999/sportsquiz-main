import React from 'react'
import './hero.css'
import {Link} from 'react-router-dom'

const HeroSection = () => {
   
    
    return (
        <div className="hero">
            
            <div className="hero-content">
                <h1 className="first"> HOW GOOD ARE YOU AT SPORT?</h1>
                <h1 className="second">Take our Quick (10) Question Quiz and Get your Universal Sports Number (USN)</h1>
       
                <p className="pick">Pick Your Sport</p>
                   <div className="HeroBtnWrapper">
                       <Link className="btn" to="/get-your-utn">
                        Tennis
                       
                       </Link>
                       
                       <Link className="btn" to="/get-your-usn">
                        Soccer
                       </Link>
                       <br/>
                       <br/>
                        
                   </div>
                   <p className="grade">27,000 Graded So Far</p>
            </div>
        </div>
    )
}

export default HeroSection
