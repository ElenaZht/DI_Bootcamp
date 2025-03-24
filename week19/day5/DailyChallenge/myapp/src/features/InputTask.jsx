import React, { useCallback, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from './TasksSlice'

export default function InputTask() {
    const categories = useSelector(state => state.categoryReducer.categories)
    const [inputColor, setInputColor] = useState('no color')
    const [inputTitle, setInputTitle] = useState('')
    const [inputCategory, setInputCategory] = useState('no category')
    const dispatch = useDispatch()

    const addNewTask = useCallback((e) => {
        e.preventDefault()
        const title = inputTitle
        if (title.length == 0) return
        const category = inputCategory
        const color = inputColor
        console.log(title, category, color)
        dispatch(addTask({title, category, color}))

        //clean up fields
        setInputColor('no color')
        setInputTitle('')
        setInputCategory('no category')
    }, [dispatch, inputColor, inputTitle, inputCategory])


  return (
    <form onSubmit={addNewTask}>
        <h4>add new task</h4>
        <input onInput={(e) => setInputTitle(e.target.value)} type="text" placeholder='enter task' name='title' value={inputTitle}/>
        <select name="category" onChange={(e) => setInputCategory(e.target.value)}>
            <option value="no_category">no category</option>
            {categories && categories.map(c => {
                return(
                    <option key={c.categoryID} value={c.categoryID}>{c.name}</option>
                )
            })}
        </select>
        <div className='colors'>
            <div onClick={() => setInputColor('red')} name='color' className='colorBtn' style={{backgroundColor: 'red', border: inputColor === 'red' ? 'solid' : ''}}></div>
            <div onClick={() => setInputColor('yellow')} name='color' className='colorBtn' style={{backgroundColor: 'yellow', border: inputColor === 'yellow' ? 'solid' : ''}}></div>
            <div onClick={() => setInputColor('purple')} name='color' className='colorBtn' style={{backgroundColor: 'purple', border: inputColor === 'purple' ? 'solid' : ''}}></div>
            <div onClick={() => setInputColor('blue')} name='color' className='colorBtn' style={{backgroundColor: 'blue', border: inputColor === 'blue' ? 'solid' : ''}}></div>
            <div onClick={() => setInputColor('green')} name='color' className='colorBtn' style={{backgroundColor: 'green', border: inputColor === 'green' ? 'solid' : ''}}></div>
            <div onClick={() => setInputColor('no color')} name='color' className='colorBtn nocolor' style={{border: inputColor === 'no color' ? 'solid' : 'solid white'}}></div> 
        </div>

        <div className='preview'>
            <p>title: {inputTitle}</p>
            <p>category: {inputCategory}</p>
        </div>
        <button type='submit'>Add task</button>
    </form>
  )
}
