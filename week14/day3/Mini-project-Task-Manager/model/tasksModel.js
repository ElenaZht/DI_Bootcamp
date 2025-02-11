import fs from 'fs/promises';
import { v4 as uuidv4} from 'uuid';



export async function getAllTasksFromJSONFile() {
  try {
    const data = await fs.readFile('./model/db.json', 'utf-8');
    return JSON.parse(data);

  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return null;
  }
}
// export async function getAllTasksFromJSONFile() {
//     return new Promise((resolve, reject) => {
//       fs.readFile('./db.json', 'utf8', (err, data) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(JSON.parse(data));
//       });
//     });
//   }

export async function getTaskByIDFromJSONFile(taskId){
    const allTasks = await getAllTasksFromJSONFile()
    if (allTasks){
        const task = allTasks.find(t => t.id == taskId)
        if (task){
            return task
        }
    }
    return null
}

export async function addTaskToJSONFile(title, completed){
    if (title && completed !== undefined){
        const data = await fs.readFile('./model/db.json', 'utf8');
        const tasks = JSON.parse(data)
        const newTask = {
            id: uuidv4(),
            title,
            completed
          }
        tasks.push(newTask)
        await fs.writeFile('./model/db.json', JSON.stringify(tasks, null, 2))
        return newTask

    } else {
        return null
    }
}

export async function updateTaskInJSONFile(taskId, newtitle, newCompleted){
    if (taskId && newtitle && newCompleted !== undefined){
        const data = await fs.readFile('./model/db.json', 'utf8');
        const tasks = JSON.parse(data)
        const taskIndex = tasks.findIndex(t => t.id = taskId)
        if (taskIndex !== -1){
            tasks[taskIndex].title = newtitle
            tasks[taskIndex].completed = newCompleted
            await fs.writeFile('./model/db.json', JSON.stringify(tasks, null, 2))
            return tasks[taskIndex]


        } else {
            res.sendStatus(404)
        }


    } else{
        return null
    }
}

export async function deleteTaskFromJSONFile(taskId) {
    const data = await fs.readFile('./model/db.json', 'utf8');
    const tasks = JSON.parse(data)
    const taskIndex = tasks.findIndex(t => t.id = taskId)
    if (taskIndex !== -1){
        const deletedTask = tasks.splice(taskIndex, 1)
        if (deletedTask){
            await fs.writeFile('./model/db.json', JSON.stringify(tasks, null, 2))
            return deletedTask
        } else {
            return null
        }

    } else {
        return null
    }
}