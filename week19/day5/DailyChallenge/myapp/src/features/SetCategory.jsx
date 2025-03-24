import React from 'react'
import {setCategory, addCategory, editCategory, deleteCategory} from './CategoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategoryById } from '../redux/selectors'

export default function SetCategory() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categoryReducer.categories)
    const currentCategoryId = useSelector(state => state.categoryReducer.currentCategory)
    const category = useSelector(state => selectCategoryById(currentCategoryId)(state));
    const categoryName = category ? category.name : '';

  return (
    <div>
        <h4>choose category: {categoryName}</h4>
        <select onChange={(e) => dispatch(setCategory(e.target.value))}>
            <option value=''>no category</option>
            {categories && categories.map(category => {
            return (
                <option key={category.categoryID} value={category.categoryID}>{category.name}</option>
            )
            })}
        </select>
    </div>
  )
}
