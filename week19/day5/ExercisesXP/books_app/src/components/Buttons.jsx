import React from 'react'
import { setGenre } from './BookList/BooksSlice'
import { useDispatch } from 'react-redux'

export default function Buttons() {
    const dispatch = useDispatch()
  return (
    <div className='buttons'>
        <button onClick={() => dispatch(setGenre('all'))}>All</button>
        <button onClick={() => dispatch(setGenre('horror'))}>Horror</button>
        <button onClick={() => dispatch(setGenre('fantasy'))}>Fantasy</button>
        <button onClick={() => dispatch(setGenre('sciencefiction'))}>ScienceFiction</button>
    </div>
  )
}
