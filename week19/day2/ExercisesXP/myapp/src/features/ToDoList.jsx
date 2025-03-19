import React from 'react'
import { useSelector } from 'react-redux'
import ToDo from './ToDo'

export default function ToDoList() {
    const todos = useSelector(state => state.todos)
    console.log(todos)
    return (
        <>
            {todos && todos.map(todo => {
                return (
                    <ToDo todo={todo}  key={todo.id}/>
                )
            })}
        </>
    )
}
