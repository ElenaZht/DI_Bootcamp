import React, { Component } from 'react'

export default class BuggyCounter extends Component {
    constructor(){
        super()
        console.log('counter render')
        this.state = {
            counter: 0
        }
    }
    handleClick = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
      };
     

    render() {
        if (this.state.counter >= 5) {
            throw new Error('i crashed!')
        }

        return (
        <div>
            BuggyCounter {this.state.counter}
            <button onClick={this.handleClick}>+1</button>
        </div>
        )
    }
}
