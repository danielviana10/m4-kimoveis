import { Router } from "express"
import middlewares from "../middlewares";
import { loginSchema } from "../schemas/login.schemas";
import { session } from "../controllers";

export const sessionRouter: Router = Router();

sessionRouter.post("", middlewares.validateBody(loginSchema) , session)
