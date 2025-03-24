import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    tasks: [
        {taskID: nanoid(), title: 'buy milk', isCompleted: false, color: '#ED80E9', categoryID: ''},
        {taskID: nanoid(), title: 'wash window', isCompleted: true, color: '#FFFFC5', categoryID: ''},
        {taskID: nanoid(), title: 'take a bath', isCompleted: false, color: '', categoryID: 'work'},
    ]
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            //gets title, categoryID
            state.tasks.push({
                taskID: action.payload.title,
                title: action.payload.title,
                isCompleted: false,
                color: action.payload.color || 'no color',
                categoryID: action.payload.categoryID || 'no category'
                
            })
        },
        editTask: (state, action) => {
            //gets taskID, title, categoryID, color
            state.tasks.forEach(t => {
                if (t.taskID === action.payload.taskID){
                    t.title = action.payload.title || t.title,
                    t.color = action.payload.color || t.color,
                    t.categoryID = action.payload.categoryID || t.categoryID
                }  
            })

        },
        deleteTask: (state, action) => {
            //gets taskID
            state.tasks = state.tasks.filter(t => t.taskID !== action.payload.taskID)

        },
        completeTask: (state, action) => {
            //gets taskID
            state.tasks.forEach(t => {
                if (t.taskID === action.payload.taskID){
                   t.isCompleted = !t.isCompleted 
                }
            })
        } 
    }
})

export const {addTask, editTask, deleteTask, completeTask} = tasksSlice.actions
export default tasksSlice.reducer