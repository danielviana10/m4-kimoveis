import { compare } from "bcryptjs";
import { AppError } from "../errors";
import { LoginRequest } from "../interfaces/login.interface";
import { sign } from "jsonwebtoken";
import { User } from "../entities/User.entity";
import { userRepo } from "../repositories";

const session = async (payload: LoginRequest): Promise<string> => {

    const foundUser: User | null = await userRepo.findOneBy({ email: payload.email });

    if(!foundUser){
        throw new AppError("Invalid credentials", 401);
    };

    const matchPassword: boolean = await compare(payload.password, foundUser.password);

    if(!matchPassword){
        throw new AppError("Invalid credentials", 401);
    };

    const token: string = sign(
        { admin:foundUser.admin },
        process.env.SECRET_KEY!,
        { 
            expiresIn: process.env.EXPIRES_IN,
            subject: foundUser.id.toString(),
        }
    );

    return token
};

export default session;