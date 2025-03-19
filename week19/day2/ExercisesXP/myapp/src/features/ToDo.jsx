import React from 'react'
import { useDispatch } from 'react-redux'
import { toggle, remove } from './ToDoSlice'

export default function ToDo({todo}) {
    const dispatch = useDispatch()

    const removeTodo = () => {
        console.log('remove')
        dispatch(remove(todo.id))
    }
  return (
    <div>
        <div className='todo'>
            <input onChange={() => dispatch(toggle(todo.id))} type="checkbox" name="isdone" checked={todo.isDone}/>
            <p>{todo.text}</p>
            <button onClick={() => removeTodo()}> x </button>
        </div>
    </div>
  )
}
