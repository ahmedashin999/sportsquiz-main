 import React from 'react'
// import '../Tennis/tennis.css';
// import '../Soccer/soccer.css'
import '../css/quiz.css'
import logo from '../Images/Soccer.svg'
import ProgressCompleted from '../Progress/ProgressCompleted'
import {Link} from 'react-router-dom'
 

function Sresult({score}) {
 
    let grade=0;
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
                 
           <Link to="/">
                 <img src={logo} alt=""className="logo"/>
                 </Link>
                
                </div>
        <ProgressCompleted/>
     
        <div className="result">
          
     
    <h4>Congratulations- Your USN is:</h4> 
    <h1>{grade}</h1>

    { grade > 1 ? (
              <p>Keep practicing to get to a USN {grade -1}</p>
         ):(
              <p>Congratulations you are the best</p>

         )}
               
              
           
    <Link to="/signup">
       <button className="sign-up">Sign Up</button>
    </Link>                    
     <p className="small">Sign Up for some free sports tips</p>                
       </div>
       </div>
    )
}

export default Sresult
