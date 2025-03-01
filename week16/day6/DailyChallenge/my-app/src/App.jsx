import { useEffect, useState } from 'react'
import './App.css'
import Form from './Form'
import Output from './Output'

function App() {
  const [userInformation, setUserInformation] = useState({
    firstName: '',
    lastName: '',
    age: null,
    sex: 'male',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });
  useEffect(()=>{
    console.log('app has ', userInformation)
  }, [userInformation])


  return (
    <>
      <section name='userForm'>
        <header>
          <h1>Sample form</h1>
        </header>
        <Form userInformation={userInformation} setUserInformation={setUserInformation}/>
      </section>
      <hr />
      <section name='userInfo'>
        <h2>Entered information:</h2>
        <Output userInformation={userInformation}/>
      </section>
    </>
  )
}

export default App
