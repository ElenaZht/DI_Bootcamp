//? This package is no longer supported
import express from 'express'

const app = express()

//todo User Registration: POST /api/register

//todo User Login: POST /api/login

//User Profile: GET /api/profile
app.get('/api/profile', (req, res) => {
    res.send('<h1>User profile</h1>')
})

app.listen(5000, () => {
    console.log('server is running..')
})