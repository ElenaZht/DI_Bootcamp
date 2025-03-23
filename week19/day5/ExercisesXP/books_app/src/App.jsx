import './App.css'
import BookList from './components/BookList/BookList'
import Buttons from './components/Buttons'
import { useSelector } from 'react-redux'

function App() {
  const genre = useSelector(state => state.genre)
  return (
    <>
      <h1>Book inventory</h1>
      <p className='category'>category: {genre}</p>
      <Buttons/>
      <BookList/>
    </>
  )
}

export default App
