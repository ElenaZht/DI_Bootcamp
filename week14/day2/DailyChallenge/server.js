import express from 'express'
import path from 'path'
import router from './routes/usersRouter.js'


const app = express()

app.use(express.json())
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

app.listen(3000, () => {
    console.log('posts server is running')
})

