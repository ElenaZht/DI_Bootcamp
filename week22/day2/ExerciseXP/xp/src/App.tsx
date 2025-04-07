import './App.css'
import Counter from './Counter'
import Greeting from './Greeting'
import UserCard from './UserCard'
import UserList from './UserList'

// Exercise 1: Creating a New React Project with TypeScript using Vite

// Exercise 2: Greeting.tsx

//Exercise 3: Counter.tsx

//Exercise 4: UserCard.tsx

//Exercise 5: UserList.tsx

function App() {

  return (
    <>
      <Greeting name='Anne' messageCount={0}/>
      <Counter/>
      <UserCard age={20}/>
      <UserList/>
    </>
  )
}

export default App
