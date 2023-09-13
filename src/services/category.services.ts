import { Category } from "../entities/Categories.entity";
import { CategoryCreate } from "../interfaces/category.interface"
import { categoryRepo } from "../repositories";
import { categoryReadSchema } from "../schemas/category.schemas";

const create = async (payload: CategoryCreate): Promise<Category> => {
    
    return await categoryRepo.save(payload);
}

const read = async (): Promise<any> => {
    return categoryReadSchema.parse(await categoryRepo.find());
};

export default { create, read }