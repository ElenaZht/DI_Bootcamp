import React, { useState } from 'react'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTask } from './TasksSlice'

export default function EditTask({taskID}) {
    const [active, setActive] = useState(false)
    const categories = useSelector(state => state.categoryReducer.categories)
    const [inputColor, setInputColor] = useState('no color')
    const [inputTitle, setInputTitle] = useState('')
    const [inputCategory, setInputCategory] = useState('no category')
    const dispatch = useDispatch()

    const editTheTask = useCallback((e) => {
        setActive(false)
        e.preventDefault()
        const title = inputTitle
        if (title.length == 0) return
        const category = inputCategory
        const color = inputColor
        dispatch(editTask({taskID, title, category, color}))

    }, [dispatch, inputColor, inputTitle, inputCategory])
  return (
    <div>
        {!active && <button onClick={() => setActive(true)}>✎</button>}
        {active && 
            <div>
                <input  onInput={(e) => setInputTitle(e.target.value)} type="text" placeholder='title'/>
                <select onChange={(e) => setInputCategory(e.target.value)}>
                    <option value="no_category">no category</option>
                    {categories && categories.map(category => {
                    return (
                        <option key={category.categoryID}>{category.name}</option>
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
            </div>
        }
        {active && <button onClick={editTheTask}>save</button>}
    </div>
  )
}
