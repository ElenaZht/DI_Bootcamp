import express from 'express'
import router from './routers/usersRouter.js'
import path from 'path'

const app = express()
app.use(express.json())
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)

//sending html pages
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.listen(3000, () => {
    console.log('server is running')
})