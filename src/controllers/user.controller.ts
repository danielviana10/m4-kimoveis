import { Request, Response } from "express";
import { userServices } from "../services";
import { UserReturn } from "../interfaces";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await userServices.create(req.body)

    return res.status(201).json(user);
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const user = await userServices.read();

    return res.status(200).json(user)
}

const partialUpdate = async (req: Request, res: Response): Promise<Response> => {
    const { foundUser } = res.locals;
    const updateuser = req.body;

    const user: User = await userServices.partialUpdate(foundUser, updateuser)

    return res.status(200).json(user)
};

const destroy = async (req: Request, res: Response): Promise<Response> =>{
    const user = await userServices.destroy(res.locals.foundUser);
    return res.status(204).json();
}
export default { create, read, partialUpdate, destroy }