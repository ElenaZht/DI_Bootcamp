import React from 'react'
import './Switcher.css'
import { useContext } from 'react'
import ModeContext from './ModeContext'

export default function Switcher() {
    const { mode, setMode } = useContext(ModeContext)

    return (
    <div className='switchContainer'>
        <div className='switherRail'>
        <div className='switcherToggle' 
            style={{
                right: mode === 'light' ? '' : '5px',
                backgroundColor: mode === 'light' ? 'whitesmoke' : 'darkgrey',
            }}
        ></div>
        <input onClick={() => setMode('light')} type="radio" name="modeBtn" id="lightBtn" />
        <input onClick={() => setMode('dark')} type="radio" name="modeBtn" id="darkBtn" />
        </div>
    </div>
)
}