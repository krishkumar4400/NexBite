import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/user', userRouter);

export default app;