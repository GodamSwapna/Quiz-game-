import React, { useState,useContext }from 'react'
import { Questions } from '../Helper/QuestionsAns'
import {QuizContext} from '../Helper/Context'

function Quiz() {
  const {score,setScore,setGameState}=useContext(QuizContext)
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptiobnChosen] =useState("")

  const nextQuestion = () => {
    if (Questions[currQuestion].Answer === optionChosen) {
      setScore(score+1)
    }
    // alert(score)
    setCurrQuestion(currQuestion+1)
  };
  
  const finishQuiz = () => {
    if (Questions[currQuestion].Answer === optionChosen) {
      setScore(score+1)
    }
    setGameState("endScreen")
  }


  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].Question}</h1>
      <div className="options">
        <button onClick={()=>setOptiobnChosen("A")}>A :{Questions[currQuestion].optionA}</button>
        <button onClick={()=>setOptiobnChosen("B")}>B :{Questions[currQuestion].optionB}</button>
        <button onClick={()=>setOptiobnChosen("C")}>C :{Questions[currQuestion].optionC}</button>
        <button onClick={()=>setOptiobnChosen("D")}>D :{Questions[currQuestion].optionD}</button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>submit</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
      
    </div>
  )
}

export default Quiz