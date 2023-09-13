import { Router } from "express";
import { userController } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schemas";
import { validateBody } from "../middlewares/validateBody.middleware";

export const userRouter: Router = Router();

userRouter.post("", validateBody(userCreateSchema), middlewares.verifyEmailExists, userController.create);

userRouter.get("", middlewares.ensureTokenIsValid, middlewares.ensureTokenAdmin, userController.read);

userRouter.use("/:id", middlewares.verifyIdExists, middlewares.ensureTokenIsValid, middlewares.ensureTokenAdmin)
userRouter.patch("/:id", middlewares.validateBody(userUpdateSchema), userController.partialUpdate)

userRouter.delete("/:id", userController.destroy)