import {
    getAllTasksFromJSONFile,
    getTaskByIDFromJSONFile,
    addTaskToJSONFile,
    updateTaskInJSONFile,
    deleteTaskFromJSONFile
} from '../model/tasksModel.js'


export const gellTasks = async (req, res) => {
    const tasks = await getAllTasksFromJSONFile()
    if (tasks){
        res.status(200).json(tasks)
    } else {
        res.status(500).json({"messege": "tasks not found"})
    }
}

export const getTaskByID = async (req, res) => {
    const id = req.params.id
    const task = await getTaskByIDFromJSONFile(id)
    if (task){
        res.status(200).json(task)
    } else {
        res.status(500).json({"messege": "task not found"})
    }
}

export const addTask = async (req, res) => {
    const { title, completed } = req.body
    const result = await addTaskToJSONFile(title, completed)
    if (result){
        res.sendStatus(200)
    } else {
        res.status(500).json({"messege": "task not added"})
    }
}

export const updateTask = async (req, res) => {
    const id = req.params.id
    const { title, completed } = req.body

    if (title && completed !== undefined){
        const updatedTask = await updateTaskInJSONFile(id, title, completed)
        if (updatedTask){
            res.status(200).json(updatedTask)
        } else {
            res.status(500).json({"messege": "task not updated"})
        }

    } else {
        res.status(403).json({"messege": "title and completed missing"})
    }
}

export const deleteTask = async (req, res) => {
    const id = req.params.id
    if (id){
        const result = await deleteTaskFromJSONFile(id)
        if (result){
            res.status(200).json({"messege": "task deleted successfuly"})

        } else {
            res.status(404).json({"messege": "task not defined"})
            return
        }

    } else {
        res.status(403).json({"messege": "id is missing"})
    }
}