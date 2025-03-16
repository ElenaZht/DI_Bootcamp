const initialState = {
  tasks : {
    'Sun Mar 16 2025': [
          {id: 0, text: 'buy milk', isDone: false},
          {id: 1, text: 'wash cloths', isDone: true}
    ],
    'Tue Mar 11 2025': [
      {id: 0, text: 'go for a walk', isDone: false}
    ]
  },
  currentDay : (new Date()).toDateString()
};
//{
//   tasks : {'date str' : [{}, {}, ..]},
//   currentDay : 'date string'
// } -->  {tasks: {'date string' : [tasks],..}}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_DAY':
        return { ...state, currentDay: action.payload }

      case 'TOGGLE_TASK':
        const { id, day } = action.payload
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [day]: state.tasks[day].map(task => 
              task.id === id ? {...task, isDone: !task.isDone} : task
            )
          }
        }

      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [action.payload.day]: state.tasks[action.payload.day].filter(task => task.id !== action.payload.id)
          }
        }
      case 'ADD_TASK':
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [action.payload.day] : [
              ...(state.tasks[action.payload.day] || []),
              {id: Date.now(), text: action.payload.text, isDone: false}
            ]
          }
        }

      default:
        return state;
    }
};
export default tasksReducer