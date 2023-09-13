import { Request, Response } from "express";
import { categoryServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category = await categoryServices.create(req.body)

    return res.status(201).json(category);
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const category = await categoryServices.read();

    return res.status(200).json(category)
}

export default { create, read }