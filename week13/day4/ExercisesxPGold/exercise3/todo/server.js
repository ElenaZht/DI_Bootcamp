// Use the express module to create the API endpoints.
// For generating unique IDs, you can use libraries like uuid or 
// simply auto-increment integers.
// Use express.json() middleware to parse JSON data from requests.
// Handle errors and edge cases, such as invalid IDs, missing data, etc.

import express from 'express'

const app = express()

let todos = [
    {'id': 1, 'title': 'by milk', 'isDone': false},
    {'id': 2, 'title': 'go shopping', 'isDone': false},
    {'id': 3, 'title': 'cook dinner', 'isDone': false},
    {'id': 4, 'title': 'wash shoes', 'isDone': false},
    {'id': 5, 'title': 'do exercises', 'isDone': false}
]

//todo Create a new todo: POST /api/todos
// Get all todos: GET /api/todos
app.get('/api/todos', (req, res) => {
    res.json(todos)
})
// Get a specific todo: GET /api/todos/:id
app.get('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === +req.params.id)
    if (todo){
        res.json(todo)
    } else {
        res.json({'messege': 'task not found', 'statusCode': 404})
    }
})
// Update a todo: PUT /api/todos/:id
// Delete a todo: DELETE /api/todos/:id

app.listen(5000, () => {
    console.log('server is running..')
})