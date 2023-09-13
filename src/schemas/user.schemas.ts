import { z } from "zod";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createAt: z.string(),
    updateAt: z.string(),
    deleteAt: z.string().nullable()
});

const userCreateSchema = userSchema.omit({
    id: true,
    createAt: true,
    updateAt: true,
    deleteAt: true
});

const userReturnSchema = userSchema.omit({ password: true });
const userUpdateSchema = userCreateSchema.partial();
const userReadSchema = userReturnSchema.array();

export { userSchema, userCreateSchema, userReturnSchema, userUpdateSchema, userReadSchema };