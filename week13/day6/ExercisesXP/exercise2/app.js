import express from 'express'
import router from './routes/todos.js'

const app = express()

// Middleware functions in Express are executed 
// in the order they are defined. If express.json() 
// is placed after your routes, the JSON body won't 
// be parsed before the request reaches your route
//  handlers, leading to undefined request bodies.
app.use(express.json())
app.use('/', router)



app.listen(3000, () => {
    console.log('server is running..')
})