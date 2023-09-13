import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import { categoryRouter, sessionRouter, userRouter } from './routers';
import { scheduleRouter } from './routers/schedule.router';
import middlewares from './middlewares';

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/schedules", scheduleRouter)
app.use("/categories", categoryRouter)
app.use("/login", sessionRouter)

app.use(middlewares.handleErrors);

export default app;
