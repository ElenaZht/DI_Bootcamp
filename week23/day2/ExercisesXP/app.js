const express = require('express')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/userRouter.js')


const app = express()

const port = 5001

app.use(express.json())
app.use(cookieParser())
app.use('/', userRouter)

app.listen(port, (err) => {
    if (!err) {
        console.log('server is running on ', port);
        return;
    } 
    console.log('Error', err);
   
    
})