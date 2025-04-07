import React from 'react'

//Create a new Greeting.tsx component file
// Define an interface for props including name and messageCount
// Create the component using the defined props
// Implement the component in App.tsx

interface GreetingProps{
    name: string,
    messageCount: number
}

export default function Greeting({name, messageCount}: GreetingProps) {
  return (
    <div>
        {name}- {messageCount}
    </div>
  )
}
