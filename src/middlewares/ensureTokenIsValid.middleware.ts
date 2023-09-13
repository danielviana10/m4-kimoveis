import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors";

export const ensureTokenIsValid = (req: Request, res: Response, next: NextFunction): void => {
    let token: string | undefined = req.headers.authorization;

    if(!token) {
        throw new AppError("Missing bearer token", 401);
    };

    token = token.split(" ")[1];

    const decoded = verify(token, process.env.SECRET_KEY!) 
    
    res.locals = { ...res.locals, decoded };

    return next();
};