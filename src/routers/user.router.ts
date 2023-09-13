import { Router } from "express";
import { userController } from "../controllers";
import { ensureTokenAdmin, ensureTokenIsValid, validateBody, verifyIdExists } from "../middlewares";
import { userUpdateSchema } from "../schemas/user.schemas";

export const userRouter: Router = Router();

userRouter.post("", userController.create);

userRouter.get("", ensureTokenIsValid, ensureTokenAdmin, userController.read);

userRouter.use("/:id", verifyIdExists, ensureTokenIsValid, ensureTokenAdmin)
userRouter.patch("/:id", validateBody(userUpdateSchema), userController.partialUpdate)

userRouter.delete("/:id", userController.destroy)