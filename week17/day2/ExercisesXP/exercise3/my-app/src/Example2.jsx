import React, { Component } from 'react'
import data from './data.json'


export default class Example2 extends Component {
  render() {
    return (
      <div>
        {data && data.Skills.map((sk, idx) => {
            return <div key={idx}>
                <h3>{sk.Area}</h3>
                <div>{
                    sk.SkillSet.map((lang, idx) => {
                        return <div key={idx}>
                            <li>name: {lang.Name}</li>
                        </div>
                    })
                }</div>
            </div>
        })}
      </div>
    )
  }
}
