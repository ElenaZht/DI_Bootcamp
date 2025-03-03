import React from 'react'
import data from './data.json'


export default function Example3() {
  return (
    <div>
        <h1>Experiences</h1>
        {data && data.Experiences.map((exp, idx) => {
            return <div key={idx}>
                <p>{exp.companyName}</p>
                <img src={exp.logo}></img>
                <a>{exp.url}</a>
                <h4>{exp.roles[0].title}</h4>
                <p>{exp.roles[0].startDate} {exp.roles[0].location}</p>
                <p>{exp.roles[0].description}</p>
                <hr />
            </div>
        })}
    </div>
  )
}
