import { useState } from 'react'
import './App.css'
import ModeContext from './ModeContext'
import Switcher from './Switcher'

function App() {
  const [mode, setMode] = useState('light')

  return (
    <div className={mode === 'light' ? 'container lightTheme' : 'container darkTheme'}>
      <ModeContext value={{mode, setMode}}>
        <p>{mode}</p>
        <h2>mode switcher</h2>
        <Switcher/>
      </ModeContext>

    </div>
  )
}

export default App

//Objective: Create a theme switcher component that allows users to toggle 
// between light and dark themes using useContext and useState.

//1. Set up a new React project using create-react-app or your preferred method.

//2. Create a context for managing the theme (light/dark mode).

//3. Implement a theme switcher component that toggles between light and dark 
// themes when clicked.

//4. Use useContext to access the current theme in other components and apply 
// the theme styles.

// Hints:
// You can create a context with a default theme value (e.g., light) and a 
// function to toggle the theme.
// The theme switcher component should have a button that, when clicked, 
// calls the theme toggling function provided by the context.
// Apply different styles (CSS or inline styles) to your components based on 
// the current theme.
