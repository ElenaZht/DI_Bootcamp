import express from 'express'
import path from 'path'
import router from './routes/usersRouter.js'


const app = express()

app.use(express.json())

app.use('/', router)

app.listen(3000, () => {
    console.log('posts server is running')
})

