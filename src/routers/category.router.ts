import { Router } from "express";
import { categoryController } from "../controllers";
import middlewares from "../middlewares";

export const categoryRouter: Router = Router();

categoryRouter.post("", middlewares.verifyToCreate, categoryController.create);
categoryRouter.get("", categoryController.read)