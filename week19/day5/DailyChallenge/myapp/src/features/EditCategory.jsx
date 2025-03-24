import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {setCategory, addCategory, editCategory, deleteCategory} from '../features/CategoriesSlice'


export default function EditCategory({category}) {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const inputRef = useRef()

    const editThisCategory = useCallback(() => {
        setActive(false)
        const newName = inputRef.current.value
        if (newName && newName.trim().length) {
            dispatch(editCategory({categoryID: category.categoryID, name: newName}))
        }
        
    }, [dispatch, category.categoryID])


  return (
    <>
       {!active && <button onClick={() => setActive(true)}>✎</button>}
       {active && 
            <input ref={inputRef} type="text"/>
       }
       {active && <button onClick={editThisCategory}>save</button>}
    </>
  )
}
