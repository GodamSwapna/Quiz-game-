import React,{useContext} from 'react'
import {QuizContext} from "../Helper/Context"
import { Questions } from '../Helper/QuestionsAns';
import "../App.css";

function EndScreen() {
  const {score , setScore, setGameState}=useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu")
  }
  return (
    <div className="EndScreen">
      <h1> Quiz is Finished </h1>
      <h3> Congratulations your score is { score}/{ Questions.length}</h3>
      <button onClick={restartQuiz}>Restart</button>
    </div>
  )
}

export default EndScreen