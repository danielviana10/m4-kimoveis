import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas/schedules.schemas";
import scheduleController from "../controllers/schedule.controller";

export const scheduleRouter: Router = Router();

scheduleRouter.post("/:id/user", middlewares.verifyIdExists, middlewares.validateBody(scheduleCreateSchema), scheduleController.create)