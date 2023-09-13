import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import { AppError } from "../errors";
import { User } from "../entities/User.entity";

export const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundUser: User | null = await userRepo.findOneBy({ id });

  console.log("funcionei")

  if(!foundUser){
    throw new AppError("User not found", 404);
  };

  res.locals.foundUser = foundUser;

  return next();
}