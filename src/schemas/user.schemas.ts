import { z } from "zod";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    admin: z.boolean().default(false).readonly(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
});

const userCreateSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
});

const userGetSchema = userSchema.omit({
    password: true,
})

const userReturnSchema = userSchema.omit({ password: true });
const userUpdateSchema = userCreateSchema.partial();
const userReadSchema = userGetSchema.array();

export { userSchema, userCreateSchema, userReturnSchema, userGetSchema, userUpdateSchema, userReadSchema };