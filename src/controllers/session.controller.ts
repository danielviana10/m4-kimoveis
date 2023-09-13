import { Request, Response } from "express";
import { session } from "../services";

const login = async (req: Request, res: Response): Promise<Response> => {
    const token = await session(req.body);

    return res.status(200).json({ token });

}

export default login;