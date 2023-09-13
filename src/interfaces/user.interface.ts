import { z } from "zod";
import { userCreateSchema, userGetSchema, userReturnSchema } from "../schemas/user.schemas";
import { User } from "../entities/User.entity";
import { DeepPartial, Repository } from "typeorm";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = User[];
type UserReturn = z.infer<typeof userReturnSchema>;
type UserReturnGet = z.infer<typeof userGetSchema>
type UserUpdate = DeepPartial<typeof userReturnSchema>;

type UserRepo = Repository<User>

export { UserCreate, UserRead, UserUpdate, UserReturnGet, UserReturn, UserRepo };