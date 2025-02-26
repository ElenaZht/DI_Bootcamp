import React, { useState } from 'react'

const Phone = () => {
    const [currPhone, setCurrPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020  
    })

    const changeColor = () => {
        setCurrPhone(prevPhone => {
            return {...prevPhone, color: 'blue'} 
        })
    }

  return (
    <>  
        <h2>My phone is {currPhone.brand}</h2>
        <h3>it is a {currPhone.color} {currPhone.model} from {currPhone.year}</h3>
        <button onClick={changeColor}>change color</button>
        
    </>
  )
}

export default Phone
