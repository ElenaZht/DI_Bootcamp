const initialState = {
    tasks: [
        {id: 0, text: 'buy milk', isDone: false},
        {id: 1, text: 'buy beer', isDone: true},
        {id: 2, text: 'buy bear', isDone: false}
    ]
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_TASK':
        return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                ),
            }

        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {id: Math.floor(100 + Math.random() * 900), text: action.payload, isDone: false}
                ]
            }

        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((t) => t.id !== action.payload)
                
            }

        default:
        return state;
    }
}