import React, { useState } from "react"

import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ])
  const [treasureLocation, setTreasureLocation] = useState(
  Math.floor(Math.random() * board.length)
  )
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  )

  const handleSquareClick = (clickedSquareIndex) => {
    let updatedBoard = [...board]
    if (clickedSquareIndex === treasureLocation) {
      updatedBoard[clickedSquareIndex] = "💎"
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣"
    } else {
    updatedBoard[clickedSquareIndex] = "🌲"
   
  }
  setBoard(updatedBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board"> 
      {board.map((value, index) => {
        console.log(value, index)
        return ( 
        <Square 
        value={value}
        index ={index}
        handleSquareClick={handleSquareClick} 
        />
        )
      })}
      </div>
    </>
  )
}

export default App