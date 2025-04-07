import express, {Request, Response} from 'express';
import {taskRouter, stuRouter, userRouter} from './routes';
import {connectDB} from './config'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', stuRouter);
app.use('/tasks', taskRouter);
app.use('/user', userRouter);

connectDB();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello TypeScript Express!');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})