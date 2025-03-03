import './App.css'

function App() {

  const sendData = async() => {
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
    try {
      const response = await fetch(
        
        'https://webhook.site/b2f68513-1196-4688-a925-7b0181c3bcfa',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }

      )
      if (response.status === 200){
        console.log(response)
        //request content on webhook.site: {"key1":"myusername","email":"mymail@gmail.com","name":"Isaac","lastname":"Doe","age":27}

      } else {
        console.log(response)
      }
       

    } catch (error) {
      console.error(error)
    }

  }
  return (
    <>
      <button onClick={sendData}>press me to send data</button>
    </>
  )
}

export default App
