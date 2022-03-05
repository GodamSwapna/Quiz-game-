import React,{useState,useContext} from 'react'
import {QuizContext} from "../Helper/Context"
import "../App.css";


function MainMenu() {
  const {gameState,setGameState}=useContext(QuizContext)
  const [firstName, setFirstName] = useState("")
  const [password,setPassword]=useState("")

  const  onSubmitHandler = e => {
    e.preventDefault()
    alert(`well come ${firstName} password ${password}`)
  }
  return (
    <div className='Menu'>
      <form onSubmit={onSubmitHandler}>
        <label>Student Name</label>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
        <label>Student passWord</label>
        <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        <button className="submit">log in</button>
      </form>
      
      <br/>
      <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu