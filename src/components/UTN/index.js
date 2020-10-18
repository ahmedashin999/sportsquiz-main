import React from 'react'
import './utn.css';
import logo from '../Images/SportsGrading.svg';
import {Link} from 'react-router-dom'
import {HeroInfo,HeroIntro,InfoH2,Infop1,Infop4} from './UtnElements'
const Utn = () => {
    return (
        
            
            <HeroInfo className="utn">
                    <Link  className="logo" to="/"> 
                <img src={logo} alt="" />
                </Link>
                <HeroIntro>
                    <InfoH2>What is USN ?</InfoH2>
                    <Infop1>USN stands for Universal Sports Number and is a simple rating system from (1) to (10). <br/>(1) Being a professional and (10) being a complete beginner.</Infop1>
                    
                
                    <Infop4><strong className="note">Please note: </strong>Our online quiz is only as accurate as your answers,so answer them honestly for the most accurate rating</Infop4>
                    <Link to="/">
                    <button className="btn">
                         Home
                         </button>
                        </Link>
                     
                </HeroIntro>
                 

                 
            </HeroInfo>
         
    )
}

export default Utn
