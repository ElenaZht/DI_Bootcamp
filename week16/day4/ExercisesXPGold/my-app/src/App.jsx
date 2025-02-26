import { useState } from 'react'
import Form from './assets/components/Form'

import './App.css'

function App() {
  const [userName, setUsername] = useState('')
  const [age, setAge] = useState(null)

  return (
    <>
      {userName && <h1>Hello {userName} {age}</h1>}
      <Form setName={setUsername} setUserAge={setAge}/>
    </>
  )
}

export default App
