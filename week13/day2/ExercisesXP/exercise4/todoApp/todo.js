export class TodoList{
    constructor(){
       this.list = [] 
       this.count = 0
    }

    addTask(task){
        const newTask = {'task_id': this.count, 'task': task, 'isCompleted': false}
        this.list.push(newTask)
        this.count++

    }

    completeTask(task_id){
        this.list[task_id]['isCompleted'] = true
    }

    getAllTasks(){
        return this.list
    }
}