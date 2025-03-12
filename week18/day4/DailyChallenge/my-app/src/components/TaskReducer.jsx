const TasksReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return {tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]};
      
      case "TOGGLE_TASK":
        return {tasks: [...state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )]};
      
      case "DELETE_TASK":
        return {tasks: state.tasks.filter(task => task.id !== action.payload)};
      
      case "FILTER_TASKS":
        if (action.payload === 'all'){
          return {tasks: [...state.tasks], filtered: [...state.tasks]}
        }
        if (action.payload === 'completedTasksBtn'){
          return {...state, filtered: [...state.tasks.filter(t => t.completed)]}
        }
        if (action.payload === 'incompletedTasksBtn'){
          return {...state, filtered: [...state.tasks.filter(t => !t.completed)]}
        }
        
      
        default:
        return state;
    }
};

export default TasksReducer