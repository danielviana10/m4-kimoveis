import { Router } from "express";
import { categoryController } from "../controllers";
import middlewares from "../middlewares";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/category.schemas";

export const categoryRouter: Router = Router();

categoryRouter.post("", middlewares.ensureTokenIsValid, middlewares.ensureTokenAdmin, validateBody(categoryCreateSchema), middlewares.verifyNameExists, categoryController.create);
categoryRouter.get("", categoryController.read)