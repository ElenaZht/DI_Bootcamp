import './App.css'
import UserComponent from './components/UserComponent'
import users from './users.json'
console.log(users)


function App() {

  return (
    <>
        {
          users.map((item, i) => {
              return <UserComponent key={i} item={item}/>
          })
        }
    </>
  )
}

export default App
