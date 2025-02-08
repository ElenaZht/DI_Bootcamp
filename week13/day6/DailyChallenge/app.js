import express from 'express'
import path from 'path'
import router from './routes/quiz.js'

const app = express()

const __dirname = path.dirname(new URL(import.meta.url).pathname)
app.use(express.static(__dirname + '/public')) // sends public dir content to client on every req

app.use(express.json())
app.use('/quiz', router)

app.listen(3000, () => {
    console.log('server is running')
})