import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import { userRouter } from './routers';
import { scheduleRouter } from './routers/schedule.router';
import { handleErrors } from './middlewares';

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/schedules", scheduleRouter)

app.use(handleErrors);

export default app;
