import { useEffect, useState } from 'react'
import './App.css'
import quotes from './QuotesDatabase.js'
import Card from './Card'

function App() {
  const [currQuoteIdx, setCurrQuoteIdx] = useState(0)
  const [color, setColor] = useState('fff')

  useEffect(() => {
    setColor(getRandomColor(color))
  }, [])

  const getRandomIdx = (quantity, currIdx) => {
    const  randIdx = Math.floor(Math.random() * quantity)
    if (randIdx !== currIdx){
      return randIdx
    } else getRandomIdx(quantity)
    
  }

  function getRandomColor(oldColor) {
      const newColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
      if (newColor !== oldColor){
        return newColor
      } else getRandomColor(oldColor)
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrQuoteIdx(getRandomIdx(quotes.length - 1, currQuoteIdx))
    setColor(getRandomColor(color))
    console.log('color set as ', color)
  }

  return (
    <>
      {
      quotes && 
      <Card handleSubmit={handleSubmit} quote={quotes[currQuoteIdx]} color={color}/>
      }
    </>
  )
}

export default App
