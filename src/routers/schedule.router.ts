import { Router } from "express";
import { validateBody, verifyIdExists } from "../middlewares";
import { scheduleCreateSchema } from "../schemas/schedules.schemas";
import scheduleController from "../controllers/schedule.controller";

export const scheduleRouter: Router = Router();

scheduleRouter.post("/:id/user", verifyIdExists, validateBody(scheduleCreateSchema), scheduleController.create)