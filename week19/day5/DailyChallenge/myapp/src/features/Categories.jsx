import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setCategory, addCategory, editCategory, deleteCategory} from '../features/CategoriesSlice'
import EditCategory from './EditCategory'

export default function NavBar() {
  const categories = useSelector(state => state.categoryReducer.categories)
  const inputRef = useRef()
  const dispatch = useDispatch()

  const addNewCategory = useCallback(() => {
    const name = inputRef.current.value
    if (name.length){
      dispatch(addCategory({name}))
    }
    inputRef.current.value = ''
  }, [dispatch, inputRef])

  const deleteThisCategory = useCallback((categoryID) => {
    dispatch(deleteCategory({categoryID}))
  }, [dispatch])

  return (
    <div className='categoriesComponent'>
      <h4>categories</h4>
      <div>
        <input ref={inputRef} type="text" placeholder='category name'/>
        <input type="button" value="Add category" onClick={addNewCategory}/>
      </div>
      {categories && categories.map(category => {
        return(
          <div key={category.categoryID}>
            <p>{category.name} 
              <button onClick={() => deleteThisCategory(category.categoryID)}>x</button>
              <EditCategory category={category}/>
            </p>
          </div>
        )
      })
      }


      </div>
  )
}
