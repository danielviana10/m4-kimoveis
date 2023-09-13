import { z } from "zod";
import { categoryCreateSchema } from "../schemas/category.schemas";
import { Category } from "../entities/Categories.entity";
import { Repository } from "typeorm";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type UserRead = Category[];
type CategoryRepo = Repository<Category>

export { CategoryCreate, UserRead, CategoryRepo }