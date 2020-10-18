import React from 'react'
import './tennis.css'
import {FaChevronLeft} from 'react-icons/fa';
import {BsChevronDoubleLeft} from 'react-icons/bs'
  
 import logo from '../Images/TennisGrading Logo_A1.svg'
import ProgressCompleted from '../Progress/ProgressCompleted';
import {Link} from 'react-router-dom'
 
function Tresult({score}) {
   
    let grade = 0;
 
          if(score>=287 && score<=318 ){
         
         grade = 1}
          
         else if(score>=255 && score <=286) {
             grade=2
        } else if(score>=223 && score <=254){
             grade=3
        }else if(score>=191 && score <=222){
             grade=4
        }else if(score>=159 && score <=190){
            grade=5
        }else if(score>=127 && score <=158){
             grade=6
        }else if(
           score>=95 && score <=126
        ){
             grade=7
        }else if(score>=63 && score <=94){
          grade=8
        }else if(score>=31 && score <=62) {
            grade=9
        }else if(score>= -51 && score<=30){
             grade=10
        } 
    return (
     <div className="result-heading">
                <div className="logo-header">
                <button className="logo-btn"   > <FaChevronLeft/> </button>
                <img src={logo} alt=""className="logo"/>
                <button className="logo-btn"><BsChevronDoubleLeft/></button>
                </div>
  <ProgressCompleted/>

  <div className="result">
    

     <h4>Congratulations- Your USN is:</h4> 
     <h1>{grade}</h1>

        <p>Keep practicing to get to a USN 5</p>
         
        
       
          <Link to="/signup">
           <button className="sign-up">Sign Up</button>
               </Link> 
                 
                  
                    <p className="small">Sign Up for some free sports tips</p>
                 
 </div>
 </div>
    )
}

export default Tresult
 
 