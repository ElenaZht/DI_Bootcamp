//check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - 
// check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added 
// by the user.
let tasks = [];

function createTask(task){

    //task.id is a string, so we need ''
    const newTaskHtml =  `
        
        <button onclick="removeTask('${task.id}')" class='removeBtn'>X</button>
        <input type="checkbox"
            onchange="setIsCompleted('${task.id}')" 
            ${task.isCompleted ? 'checked' : ''}
        />
        <span class=${task.isCompleted ? 'done' : ''} data-task-id="${task.id}">${task.text}</span>
        
    `;
    const newTask = document.createElement('div')
    newTask.classList.add('task-item')
    newTask.innerHTML = newTaskHtml
    return newTask

}

function addTask(event){
    event.preventDefault()

    if (event.target.newTask.value.length){

        //add to []
        tasks.push({
            "id": (Date.now() % 1000).toString(),
            "text" : event.target.newTask.value,
            "isCompleted" : false
        })

        //update to ui
        displayList()
    }
}

function removeTask(taskId){
    const taskIndex = tasks.findIndex(t => t.id === taskId)
    if (taskIndex !== -1){
      tasks.splice(taskIndex, 1)
        displayList()  
    }
}

function setIsCompleted(taskId){
    const taskIndex = tasks.findIndex(t => t.id === taskId)
    if (taskIndex !== -1){
        tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted
        displayList()
    }
}

function clear(){
    tasks = []
    displayList()
}

function displayList(){

    const container = document.getElementsByClassName('tasks')[0]
    container.innerHTML = ''

    if (tasks.length == 0){
        container.innerHTML = '<p>List is empty</p>'
        document.getElementsByClassName('clearButton')[0].style.display = 'none'

    } else {
        document.getElementsByClassName('clearButton')[0].style.display = 'flex'
    }
    
    tasks.forEach((task) => {
        container.appendChild(createTask(task))
    })

}


const main = () => {
    const tasks = [] //task: id, text, isComplete
    displayList()

    //disable add button if empty
    const taskInput = document.getElementsByName('newTask')[0]
    const addTaskButton = document.getElementById('addTaskButton')
    taskInput.addEventListener('input', () => {
        if (taskInput.value.length == 0){
            addTaskButton.disabled = true

        } else {
            addTaskButton.disabled = false
        }
    })
    //initial disabled
    if (!taskInput.value){
        addTaskButton.disabled = true
    }

    //clear button hide when list is empty
    const clearButton = document.getElementsByClassName('clearButton')[0]
    clearButton.addEventListener("click", clear)
    if (tasks.length == 0){
        clearButton.style.display = 'none'
    }
    

}

main()


//BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.