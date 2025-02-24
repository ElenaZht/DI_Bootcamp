import React, { Component } from 'react';
import reactLogo from '../assets/react.svg';
import './Exercise.css'


class Exercise extends Component {
    
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            <>
                <h1 style={style_header}>This is a Header</h1>
                <p className='para'>This is a Paragraph</p>
                <a href="#" style={{textDecoration: 'underline'}}>This is a Link</a>
                <h2>This is a Form:</h2>
                <label htmlFor="name" style={{display: 'block'}}>Enter your name:</label>
                <input type="text" name='name'/>
                <button>Submit</button>
                <h3>Here is an Image:</h3>
                <img src={reactLogo} alt="react logo" />

                <h3>This is a list:</h3>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </>

        )
    }
}

export default Exercise;
