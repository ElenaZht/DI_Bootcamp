import './App.css'
import Hello from '../components/Hello'
import MyComp from '../components/MyComp'
import List from '../components/List'
import Person from '../components/Person'


function App() {
  // const isLogged = true

  // let contenct;
  // if (isLogged){
  //   return(
  //     contenct = < MyComp/>
  //   )
  // } else {
  //   contenct = <Hello/>
  // }
  // return (
  //   <>{content}</>
  // )
  return(
    <>
      <Person name='john' email='john@gmail.com'/>
      <Person name='marry' email='marry@gmail.com'/>
    </>
  )
}

export default App
//<></> is a fragment, not visible in dom
// same thing is React.Fragment - just an empty container