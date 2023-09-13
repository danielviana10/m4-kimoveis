import { Router } from "express";
import { userController } from "../controllers";
import { verifyIdExists } from "../middlewares";

export const userRouter: Router = Router();

userRouter.post("", userController.create);
userRouter.get("", userController.read)
userRouter.delete("/:id", verifyIdExists, userController.destroy)