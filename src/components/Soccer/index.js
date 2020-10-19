import React,{useState} from 'react'
import questions from './SoccerData.json'
import Sresult from './Sresult'; 
import logo from '../Images/SoccerGrading Logo_A1.svg'
import {useSpring, animated} from 'react-spring'
import '../css/quiz.css';
import {FaChevronLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Progress from '../Progress';
function Soccer() {
    const[style,setStyle]=useState({})
    const props =useSpring({opacity: 1, marginTop:0,transition:'0.2s all ease-in', from:{opacity:0, marginTop:'-500px'}})
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const [showScore,setShowScore]=useState(false);
  const[score,setScore]=useState(0);
  const[done,setDone]=useState(0);
  
 const handleAnswerOptionClick =(ansPoint)=>{
    setDone(Math.floor(done + 9.901))
     if(ansPoint){
         setScore(score+ansPoint);
     }
     const nextQuestion =currentQuestion + 1;
     if(nextQuestion < questions.length){
         setCurrentQuestion(nextQuestion);
         
     } else {
         setShowScore(true);
     }
    
 }
 const handlePrevQues =()=>{
    const prevQues =currentQuestion -1;
    if(prevQues < questions.length && prevQues >= 0){
        setCurrentQuestion(prevQues);
    }
    if(prevQues === 0) {
      setDone(0);
       
  }else{
      setDone(Math.floor(done - 9.901))
  } 
}

    return (
        <animated.div style={props} className="quiz-start">
        {showScore ? (
            <div className="score-section">
                 <Sresult score={score} />
                 
            </div>
        ):( 
        <>
            <div className="quiz-heading">
                <div className="logo-header">
                 {
                     currentQuestion > 0 ? (
                        <button className="logo-btn" onClick={handlePrevQues}   > <FaChevronLeft className="icon"/> </button>
                     ): ''
                 }
                  <Link to="/">
                 <img src={logo} alt=""className="logo"/>
                 </Link>
                
                </div>
            <Progress done={done}/>
            <div className="ques-count">
                
                    {
                        currentQuestion > 0 ?(
                           ` Question ${currentQuestion}/10`
                        ) : ''
                    }
                 </div>
            </div>
            <div style={style} className="quiz">
                   
            <div className="question-section">
               
                
                <div className="question-text">
                    {questions[currentQuestion].questionText}
                </div>
            </div>
            <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption)=>(
                    <button onClick={()=>handleAnswerOptionClick(answerOption.ansPoint)}>
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

export default Soccer
