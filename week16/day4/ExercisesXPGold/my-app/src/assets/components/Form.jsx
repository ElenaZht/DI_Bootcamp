import React, { useState } from 'react'

export default function Form({setName, setUserAge}) {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(null)
    const [errormessage, setErrormessage] = useState('')
    const [text, setText] = useState('')
    const [car, setCar] = useState('Volvo')

    const handleInput = (event) => {
        setUsername(event.target.value)
        setName(event.target.value)
    }

    const mySubmitHandler = (event) => {
        event.preventDefault()
        // alert(`you are submitting ${name}`)
        const agePattern = /^[0-9]+$/;
        if (!agePattern.test(age)){
            setErrormessage('age is not valid')
            return
        }

    }

    const changeAge = (e) => {
        const agePattern = /^[0-9]+$/;
        if (!agePattern.test(e.target.value)){
            setErrormessage('age must be a number')
            return
        }
        setUserAge(e.target.value)
        setAge(e.target.value)
        setErrormessage('')
    }
  return (
    <>
        <form onSubmit={mySubmitHandler}>
            <p>Enter your name:</p>
            <input onChange={handleInput} type="text" name="userName"/>
            <p>and your age:</p>
            <input type="text" name='userAge' onChange={changeAge}/>
            <br />
            <textarea name="" id="" onChange={() => setText(event.target.value)}></textarea>
            <br />
            <button type="submit" >Submit</button>
            {errormessage && <p style={{color: 'red'}}>{errormessage}</p>}
        </form>
        <p>{text}</p>
        <select name="" id="" value={car} onChange={() => setCar(event.target.value)}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select>

    </>
  )
}
