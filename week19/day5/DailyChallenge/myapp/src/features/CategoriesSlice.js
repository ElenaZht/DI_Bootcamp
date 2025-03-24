import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories: [
        {categoryID: 'work', name: 'work'},
        {categoryID: 'home', name: 'home'},
    ],
    currentCategory: ''
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.currentCategory = action.payload
        },
        addCategory: (state, action) => {
            state.categories.push({
                categoryID: action.payload.name,
                name: action.payload.name,
            })
        },
        editCategory: (state, action) => {
            const { categoryID, name } = action.payload;
            const categoryIndex = state.categories.findIndex(c => c.categoryID === categoryID);

            if (categoryIndex !== -1) {
                state.categories[categoryIndex] = {
                    ...state.categories[categoryIndex],
                    name: name
                };
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter(c => c.categoryID !== action.payload.categoryID)
        },

    }
})

export const {setCategory, addCategory, editCategory, deleteCategory} = categorySlice.actions
export default categorySlice.reducer