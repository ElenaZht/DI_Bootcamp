import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        add: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                isDone: false
            })
        },
        toggle: (state, action) => {
            state.todos.forEach(todo => {
                todo.id === action.payload ? todo.isDone = !todo.isDone : todo.isDone
            })
        },
        remove: (state, action) => {
            state.todos.forEach((todo, index) => {
                if (todo.id === action.payload) {
                    state.todos.splice(index, 1);
                }
            });
        }
    }
})

export const {add, toggle, remove} = todoSlice.actions
export default todoSlice.reducer