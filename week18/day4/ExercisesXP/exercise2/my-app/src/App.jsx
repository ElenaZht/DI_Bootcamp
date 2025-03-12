// Objective: Create a React component that displays a character 
// counter for a text input. The counter should update in 
// real-time as the user types using the useRef hook.
import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  return (
    <>
      <h2>Character counter</h2>
      <Counter/>
    </>
  )
}

export default App
