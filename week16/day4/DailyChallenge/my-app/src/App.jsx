import { useState } from 'react'
import Card from './assets/Card'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])
  return (
    <>
      {languages.map((lang, idx) => {
        return <Card key={idx} language={lang}/>
      })}
    </>
  )
}

export default App
