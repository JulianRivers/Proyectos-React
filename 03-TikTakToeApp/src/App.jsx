import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Board from './Board.jsx'
import './App.css'

function App() {
  return (
    <>
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
    </>
  )
}

export default App
