import Car from './components/Car';
import './App.css'
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
        <Car carInfo={carinfo}/>
        <Events/>
        <Phone/>
        <Color/>
    </>
  )
}

export default App
