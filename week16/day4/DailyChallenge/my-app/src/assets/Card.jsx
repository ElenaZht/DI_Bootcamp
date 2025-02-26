import { useState } from 'react'
import './Card.css'

const Card = ({language}) => {
    let [votes, setVotes] = useState(0)

    return (
        <>
            <div className="langCard">
                <span>{votes}</span>
                <span>{language.name}</span>
                <button onClick={() => setVotes(votes + 1)}>click here</button>
            </div>
        </>
    )
}

export default Card