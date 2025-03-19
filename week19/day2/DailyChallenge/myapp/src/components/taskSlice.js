import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
        'Wed Mar 19 2025': [
            {id: 1, text: 'buy milk', isDone: true},
            {id: 2, text: 'buy bread', isDone: false},
        ],
    },
    
    day: (new Date()).toDateString()
}
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            if (!state.tasks[action.payload.day]){
                state.tasks[action.payload.day] = []
            }
            state.tasks[action.payload.day].push({
                id: nanoid(),
                text: action.payload.text,
                isDone: false
            })
        },
        toggle: (state, action) => {
            state.tasks[action.payload.day].forEach(task => {
                task.id === action.payload.id ? task.isDone = !task.isDone : task.isDone
            })
        },
        remove: (state, action) => {
            state.tasks[action.payload.day] = state.tasks[action.payload.day].filter(task => task.id !== action.payload.id);
        },
        edit: (state, action) => {
            state.tasks[action.payload.day].forEach(task => {
                task.id === action.payload.id ? task.text = action.payload.text : task.text
            })
        },
        setDay: (state, action) => {
            state.day = action.payload
        }
    }
})

export const {add, toggle, remove, edit, setDay} = taskSlice.actions
export default taskSlice.reducer