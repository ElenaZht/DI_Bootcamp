import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter';
import storyRouter from './routes/storyRouter';
import contributorRouter from './routes/contributorRouter'




require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});


const app = express()

app.use(morgan('combined'))


app.use(cors({
    origin: process.env.ALLOWED_DOMAIN, // frontend URL
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api/user', userRouter)
app.use('/api/stories', storyRouter)
app.use('/api/contributors', contributorRouter)


const port = process.env.PORT || 3001
app.listen(port, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('server is running on port ', port)
})