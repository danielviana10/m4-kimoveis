import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";
import { ZodError } from 'zod'
import { JsonWebTokenError } from "jsonwebtoken";

export const handleErrors = (error: unknown, request: Request, response: Response, next: NextFunction): Response => {

    if(error instanceof AppError) {
        return response.status(error.status).json({ message: error.message })
    }

    if(error instanceof ZodError) {
        const zodMessage = error.flatten().fieldErrors
        return response.status(400).json({message: zodMessage }  )
    }

    if(error instanceof JsonWebTokenError) {
        return response.status(401).json({ message: error.message } )
    }

    console.log(error);
    return response.status(500).json({ message: 'Internal server error' })
}