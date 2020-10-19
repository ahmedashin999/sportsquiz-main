import React from 'react'
import './utn.css';
import logo from '../Images/SportsGrading.svg';
import {Link} from 'react-router-dom'
const Utn = () => {
    return (
        
            
            <div className="utn">
                    <Link  className="logo" to="/"> 
                <img src={logo} alt="" />
                </Link>
                <div className="content">
                    <h2>What is a USN ?</h2>
                    <p>USN stands for Universal Sports Number and is a simple rating system from (1) to (10). <br/>(1) Being a professional and (10) being a complete beginner.</p>
                    
                
                    <p className="note-that"><strong className="note">Please note: </strong>Our online quiz is only as accurate as your answers, so answer them honestly for the most accurate rating</p>
                    <Link to="/">
                    <button className="btn">
                         Home
                         </button>
                        </Link>
                     
                </div>
                 

                 
            </div>
         
    )
}

export default Utn
