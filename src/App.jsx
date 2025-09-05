import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './todo_plain_components/TodoList'
//import Game from './tic_tac_toe/game'
import ContextDemo from './UsingContext/ContextDemo'
import CountProvider from './ContextAPI/CountContext'
import ReducerDemo from './Reducer/ReducerDemo'
import Game from './Games/Game.jsx'
import Home from './accordian_exercise/Home.jsx'

function App() {

  return (
    <Home />
  )
      
}

export default App;
