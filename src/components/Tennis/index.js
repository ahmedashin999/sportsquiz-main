import React,{ useState} from 'react'
import tennisData from './tennisData.json'
import Tresult from './Tresult';
import {useSpring, animated} from 'react-spring'
import {FaChevronLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import '../css/quiz.css'

 
import Progress from '../Progress'
import logo from '../Images/TennisGrading Logo_A1.svg'
function Tennis() {
      const props =useSpring({opacity: 1, marginTop:0,transition:'0.2s all ease-in', from:{opacity:0, marginTop:'-500px'}})
  const[style,setStyle]=useState({})
 

  const[currentQuestion,setCurrentQuestion]=useState(0);
  const [showScore,setShowScore]=useState(false);
  const[score,setScore]=useState(0);
  const[done,setDone]=useState(0);
  
     
  
   
 const handleAnswerOptionClick =(ansPoint)=>{
    setDone(Math.floor(done + 9.901))
     if(ansPoint){
         setScore(score+ansPoint)
         
     }
       
     
     
      
     const nextQuestion =currentQuestion + 1;
     if(nextQuestion < tennisData.length){
         setCurrentQuestion(nextQuestion);
          }else  {
         setShowScore(true);
     } }
     const handlePrevQues=()=>{
         
           const prevQues =currentQuestion -1;
           
           if(prevQues < tennisData.length && prevQues >= 0){
            setCurrentQuestion(prevQues);}
            if(prevQues === 0) {
                setDone(0);
                 
            }else{
                setDone(Math.floor(done - 9.901))
            } 
       }
     
 
    return (
        
        <animated.div style={props}   className="quiz-start">
        {showScore ? (
            
            
            <Tresult score={score} />
        
        ):(
            <>

                 <div className="quiz-heading">
                      
                 <div className="logo-header">
                     {
                          currentQuestion > 0 ? (
                            <a onClick={handlePrevQues} className="logo-btn" style={style}  > <FaChevronLeft className="icon"/> </a>
                          ) : ''
                }        
                     
     <Link to="/">
                 <img src={logo} alt=""className="logo"/>
     </Link>
               
                </div>
            <Progress   done={done}/>
            <div className="ques-count" style={style}>
                     {
                         currentQuestion > 0 ? (
                           ` Question  ${currentQuestion}/10`
                         ) :''
                     }
                 </div>
                 </div>
            <div     className="quiz">
                 
            <div className="question-section"
             
            >
 
                <div className="question-text">
                    
                    {tennisData[currentQuestion].questionText}
                </div>
            </div>
            <div  
              className="answer-section">
                {tennisData[currentQuestion].answerOptions.map((answerOption)=>(
                    <button   onClick={()=>handleAnswerOptionClick(answerOption.ansPoint)}>
                        {answerOption.answerText}
                    </button>
                ))}
            </div>
            </div>
            </>
        )}
    </animated.div>
  
    )
}

export default Tennis
