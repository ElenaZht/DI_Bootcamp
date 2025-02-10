import express from 'express'
import router from './routes/booksRouter.js'

const app = express()

app.use(express.json())
app.use('/api/books', router)

app.listen(3000, () => {
    console.log('books server is running')
})