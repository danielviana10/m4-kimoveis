import { Router } from "express";
import { categoryController } from "../controllers";
import { verifyToCreate } from "../middlewares";

export const categoryRouter: Router = Router();

categoryRouter.post("", verifyToCreate, categoryController.create);
categoryRouter.get("", categoryController.read)