import { Router } from "express";
import { userController } from "../controllers";
import middlewares from "../middlewares";
import { userUpdateSchema } from "../schemas/user.schemas";

export const userRouter: Router = Router();

userRouter.post("", middlewares.verifyEmailExists, userController.create);

userRouter.get("", middlewares.ensureTokenIsValid, middlewares.ensureTokenAdmin, userController.read);

userRouter.use("/:id", middlewares.verifyIdExists, middlewares.ensureTokenIsValid, middlewares.ensureTokenAdmin)
userRouter.patch("/:id", middlewares.validateBody(userUpdateSchema), userController.partialUpdate)

userRouter.delete("/:id", userController.destroy)