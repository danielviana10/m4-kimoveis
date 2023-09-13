import { Router } from "express"
import middlewares from "../middlewares";
import { loginSchema } from "../schemas/login.schemas";
import { session } from "../controllers";

export const loginRouter: Router = Router();

loginRouter.post("", middlewares.validateBody(loginSchema) , session)
