// Create a new Class Component named Color, with a state 
// variable favoriteColor which value is “red”.
// Output the value in a header tag.
// In the useEffect(), alert “useEffect reached”
// Create a button that when clicked on, calls a 
// function that changes the value of the favoriteColor 
// property to “blue”.
import React, { Component } from 'react'

export default class Color extends Component {
    constructor(){
        super()
        this.state = {
            favoriteColor: 'red',
            show: true
        }
    }
    componentDidMount= () => {
        console.log('didmount')
    }

    shouldComponentUpdate = () =>{
        return true
    }

    componentDidUpdate = () => {
        console.log("after update")
    }

    getSnapshotBeforeUpdate = () => {
        console.log("in getSnapshotBeforeUpdate")
        return null
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue' })
        console.log('click')
    }

    render() {
        return (
            <>
               <h1>favorite Color is {this.state.favoriteColor}</h1>
               <button onClick={this.changeColor}>change to blue</button>
               {this.state.show && <Child/>}
               {this.state.show && <button onClick={() => this.setState({show: false})}>delete</button>}
            </>
        )
    }
}

export class Child extends Component {
    componentWillUnmount = () => {
      alert('goodbuy!')
    }
  
    render() {
      return (
        <h1>hello world</h1>
      )
    }
  }

