import express from 'express'
import path from 'path'
import router from './routes/postsRoutes.js'


const app = express()

app.use(express.json())
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

app.listen(3000, () => {
    console.log('posts server is running')
})

// Create a posts table in postgres database, with the properties 
// like id, title, and content.
