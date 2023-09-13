import { hashSync } from "bcryptjs";
import { UserCreate, UserRead, UserReturn } from "../interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/user.schemas";
import { User } from "../entities/User.entity";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    payload.password = hashSync(payload.password, 10)

    return userReturnSchema.parse(await userRepo.save(payload))
}

const read = async (): Promise<any> => {
    return userReadSchema.parse(await userRepo.find());
};

const destroy = async (user: User): Promise<void> => {
    await userRepo.softRemove(user)
}

export default { create, read, destroy }