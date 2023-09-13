import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import { AppError } from "../errors";

export const verifyEmailExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.body;

    if(!email) next();

    const foundUser: User | null = await userRepo.findOneBy({ email });

    if(foundUser){
      throw new AppError("Email already registered", 409);
    };

    return next();
};
