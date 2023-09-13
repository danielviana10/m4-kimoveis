import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Category } from "../entities/Categories.entity";
import { categoryRepo } from "../repositories";

export const verifyNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const foundCategory: Category | null = await categoryRepo.findOneBy({
        name: req.body.name
    });

    if(foundCategory){
        throw new AppError("Category already exists", 409)
    };

    return next();
}