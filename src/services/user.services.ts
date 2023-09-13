import { UserCreate, UserReturn, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/user.schemas";
import { User } from "../entities/User.entity";

const create = async (payload: UserCreate): Promise<UserReturn> => {

    const user: User = userRepo.create(payload);

    await userRepo.save(user)

    return userReturnSchema.parse(user)
}

const read = async (): Promise<any> => {
    return userReadSchema.parse(await userRepo.find());
};

const partialUpdate = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
    return userReturnSchema.parse(await userRepo.save({ ...user, ...payload }));
};

const destroy = async (user: User): Promise<void> => {
    await userRepo.softRemove(user)
}

export default { create, read, partialUpdate, destroy }