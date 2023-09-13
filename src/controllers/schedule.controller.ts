import { Request, Response } from "express";
import schedulesServices from "../services/schedules.services";
import { User } from "../entities/User.entity";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: User = res.locals.foundUser;

    const schedule = await schedulesServices.create(req.body, user);

    return res.status(201).json(schedule);
}

export default { create };