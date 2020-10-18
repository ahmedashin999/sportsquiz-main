import React,{useState,useEffect} from 'react'
import './progress.css'

function Progress({done}) {
    const [style, setStyle] =  useState({});
 
	useEffect(()=>{
		const newStyle={
			width: `${done}%`,
			opacity: 1,
		 }
		 setStyle(newStyle)
	},[done])
	 
     
	 
    return (
        <div className="progress">
			<div className="progress-done"  style={style}>
				
				 
			</div>
		</div>
    )
}

export default Progress;
