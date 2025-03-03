import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      pageTitle: 'hello from client',
      baseUrl: 'http://localhost:3000/api'
    }
    this.sendMessageToServer = this.sendMessageToServer.bind(this);
  }
  componentDidMount() {
    const fetchMessage = async() => {
      try {
        const response = await fetch(`${this.state.baseUrl}/hello`)
        if (response.status === 200){
          const helloMessage = await response.json()
          this.setState({
            pageTitle: helloMessage.message
          })
        } else {
          console.log('request failed: ', response.status, response.statusText)
        }
        


      } catch (error) {
        console.error('Error fetching message:', error);
      }
    }
    fetchMessage()
  }

  async sendMessageToServer(event){
    event.preventDefault()
    const userMessage = document.getElementsByName('userMessage')[0].value
    if (userMessage && userMessage.length){
      try {
        const response = await fetch(`${this.state.baseUrl}/world`, 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
             },
             body: JSON.stringify({ message: userMessage })
          }
        )
        if (response.status === 200){
          const result = await response.json()
          this.displayServerResponseMessage(result.responseMessage)

        } else {
          this.displayServerResponseMessage(response.statusText)
        }

      } catch (error) {
        this.displayServerResponseMessage('failed to send post request: ', error)
      }
    }
  }

  displayServerResponseMessage = (msg) => {
    const serverMessage = document.getElementById('serverMessage')
    serverMessage.innerHTML = ''

    const message = document.createElement('p')
    message.textContent = msg
    serverMessage.appendChild(message)
  }

  render() {
    return (
      <>
        <h1>{this.state.pageTitle}</h1>
        <h2>Post to Server:</h2>
        <form onSubmit={this.sendMessageToServer}>
          <input name="userMessage" type="text" placeholder='your message'/>
          <button type="submit">Submit</button>
        </form>
        <div id="serverMessage"></div>
      </>
    );
  }
}

export default App;

