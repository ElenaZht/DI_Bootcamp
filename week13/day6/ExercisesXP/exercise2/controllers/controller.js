const todos = [
    {"id": 1, "title": "go shopping", "isDone": false},
    {"id": 2, "title": "to do home work", "isDone": false},
    {"id": 3, "title": "clean cat litterbox", "isDone": true}
];

export const getAllTodos = (req, res) => {
    //Get all to-do items
    if (todos){
        res.json(todos)
    } else {
        res.sendStatus(404)
    }
    
}

export const addTodo = (req, res) => {
    //(Create a new to-do item with a JSON request body
    const id = todos.length + 1
    const { title, isDone } = req.body;
    if (title.length && typeof isDone == "boolean"){
        todos.push({"id": id, "title": title, "isDone": false})
        res.status(200).json('todo added')
    } else {
        res.status(400)
    }

}

export const updateTodo = (req, res) => {
    // Update a to-do item by ID with a JSON request body
    const id = +req.params.id
    const todo = todos.find(t => t.id === id)
    if (todo){
        const { title, isDone } = req.body
        if (title){
            todo.title = title
        }
        if (isDone){
            todo.isDone = isDone
        }
        
        res.status(200).json(todo)
    } else {
        res.sendStatus(404)
    }
}

export const deleteTodo = (req, res) => {
    //Delete a to-do item by ID
    const id = +req.params.id
    const index = todos.findIndex(t => t.id === id)
    if (index !== -1){
        todos.splice(index, 1)
        res.status(200).json('todo deleted')
    } else {
        res.sendStatus(404)
    }
}