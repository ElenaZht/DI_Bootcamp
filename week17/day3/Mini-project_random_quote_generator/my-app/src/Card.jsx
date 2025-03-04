import React, { useEffect, useState } from 'react'
import './App.css'

export default function Card({handleSubmit, quote, color}) {

    useEffect(() => {
        console.log('color came as ', color)
        document.documentElement.style.setProperty('--main-color', color);

    })

    return (
        <>
            <div className='card'>
                <h2>"{quote && quote.quote}"</h2>
                <p>-{quote && quote.author}-</p>
                <button onClick={handleSubmit}>new quote</button>
            </div>
        </>
    )
}
