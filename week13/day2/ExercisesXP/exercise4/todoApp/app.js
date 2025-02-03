import {TodoList} from './todo.js'

const todos = new TodoList()

todos.addTask('buy milk')
todos.addTask('pick up post')
todos.addTask('cook dinner')

todos.completeTask(1)

console.log(todos.getAllTasks())