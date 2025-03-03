import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET, POST', // Allow specific HTTP methods (optional)
  }));

app.get('/api/hello', (req, res) => {
    res.status(200).json({"message": "Hello From Express"})
})
app.post('/api/world', (req, res) => {
    const { message } = req.body
    console.log(message)
    res.status(200).json({"responseMessage": `I recieved your POST request. This is what you sent me: ${message}`})
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running on port ', port)
})