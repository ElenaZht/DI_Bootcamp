import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { edit } from './taskSlice'

export default function EditToDo({task}) {
    const day = useSelector(state => state.day)
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [inputText, setInputText] = useState(task.text)
    const inputRef = useRef()

    const editTaskText = () => {
        if (inputRef.current.value.trim().length === 0) return
        setActive(false)
        dispatch(edit({day, id : task.id, text: inputRef.current.value.trim()}))
    }

  return (
    <>
        {active && 
        <div>
            <input onChange={() => setInputText(inputRef.current.value)} ref={inputRef} type="text" value={inputText}/>
            <input onClick={editTaskText} type="button" value="save" />
            <input onClick={() => setInputText('')} type="button" value="clear" />
        </div>
        }
        {!active &&<button onClick={() => setActive(true)}>🖉</button>}
    </>

    
  )
}
