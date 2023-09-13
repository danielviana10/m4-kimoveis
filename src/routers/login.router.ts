import { Router } from "express"
import { validateBody } from "../middlewares";
import { loginSchema } from "../schemas/login.schemas";
import { session } from "../controllers";

export const loginRouter: Router = Router();

loginRouter.post("", validateBody(loginSchema), session)
