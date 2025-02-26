import { useState } from "react"
import Garage from "./Garage"

const Car = ({carInfo}) => {

    const [color, setColor] = useState('red')

    return (
        <>
            <h1>this car is {color} {carInfo.model}</h1>
            <h2>who lives in my <Garage size={'small'}/> ?</h2>
            
        </>
        
    )
}

export default Car