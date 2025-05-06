const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');

require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});
const userRouter = require('./routes/userRouter.js')

const app = express()

app.use(express.json())
app.use(cookieParser());
app.use(cors())
app.use('/api/user', userRouter)

//todo dev or prod .env
const port = process.env.PORT || 3001
app.listen(port, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('server is running on port ', port)
})