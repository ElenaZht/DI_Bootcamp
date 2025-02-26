import { useState, useEffect } from 'react'

const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState(true)

    const clickMe = () => {
        alert('I was clicked')
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter"){
            alert(`The ${event.key} key was pressed, your input is: ${event.target.value}`)
        }
    }

    const toggleHandler = () => {
        setIsToggleOn(!isToggleOn)
    }
    useEffect(() => { //to see async updated state
    }, [isToggleOn]);
    return (
        <>
            <button onClick={clickMe}>click</button>
            <input type="text" onKeyDown={handleKeyDown} placeholder="press the ENTER key!"/>
            <hr />
            {isToggleOn ? <p>ON</p> : <p>OFF</p>}
            <button onClick={toggleHandler}>switch toggle state</button>
        </>
    )
}

export default Events