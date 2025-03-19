import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './taskSlice'


export default function RemoveToDo(props) {
  const day = useSelector(state => state.day)
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(remove({id: props.id, day}))}>🗙</button>
  )
}
