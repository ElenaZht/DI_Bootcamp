import express from 'express'
import router from './routes/tasksRouter.js'

const app = express()
app.use(express.json())
app.use('/tasks', router)

app.listen(3000, () => {
    console.log('task server is running')
})