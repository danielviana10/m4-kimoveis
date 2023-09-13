import { z } from "zod";
import { userCreateSchema, userReturnSchema } from "../schemas/user.schemas";
import { User } from "../entities/User.entity";
import { DeepPartial, Repository } from "typeorm";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = User[];
type UserReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>

export { UserCreate, UserRead, UserUpdate, UserReturn, UserRepo };