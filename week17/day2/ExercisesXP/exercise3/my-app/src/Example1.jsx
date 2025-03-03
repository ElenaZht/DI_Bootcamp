import React, { Component } from 'react'
import data from './data.json'

export default class Example1 extends Component {
  render() {
    return (
      <div>
        {data && data.SocialMedias.map((sm, idx) => {
            return <li key={idx}>{sm}</li>
        })}
      </div>
    )
  }
}
