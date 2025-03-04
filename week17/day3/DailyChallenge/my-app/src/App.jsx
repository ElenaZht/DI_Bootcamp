import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [operation, setOperation] = useState('Add')
  const [errorMessage,setErrorMessage] = useState('')

  const handleSubmit = (e, operation) => {
    e.preventDefault()
    const num1 = +e.target.n1.value
    const num2 = +e.target.n2.value
    switch (operation){
      case "Add":
        setResult(num1 + num2)
        break;
      case "Substract":
        setResult(num1 - num2)
        break;
      case "Multiply":
        setResult(num1 * num2)
        break;
      case "Divide":
        if (num2 == 0){
          setErrorMessage('you are trying to devide to 0')
          break;
        }
        setResult((num1 / num2).toFixed(4))
        break;
    }
    
  }

  return (
    <>
      <div className="container">
        <h2>{operation}ing two numbers</h2>
        <select name="selectOperation" onChange={(e) => setOperation(e.target.value)}>
          <option value="Add">Add(+)</option>
          <option value="Substract">Substract(-)</option>
          <option value="Multiply">Multiply(*)</option>
          <option value="Divide">Divide(/)</option>
        </select>
        <form onSubmit={(e) => handleSubmit(e, operation)}>
          <div className='inputWrap'>
            <input type="number" name="n1" />
            <input type="number" name="n2" onChange={() => setErrorMessage('')}/>
          </div>
          <button type='submit'>{operation} them!</button>
        </form>
        <div className="output">{result}</div>
        <div className="error">{errorMessage}</div>
      </div>
    </>
  )
}

export default App
