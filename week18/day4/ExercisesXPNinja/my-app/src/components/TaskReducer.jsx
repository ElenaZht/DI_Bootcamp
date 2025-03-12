const TasksReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        console.log('add task dispatcher')
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
      case "TOGGLE_TASK":
        console.log('toggle task reducer ', action.payload)
        return state.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
      case "DELETE_TASK":
        return state.filter(task => task.id !== action.payload);
     
        default:
        return state;
    }
};

export default TasksReducer