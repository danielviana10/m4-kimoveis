import { z } from "zod";
import { userSchema } from "./user.schemas";
// export const loginSchema = z.object({
//     email: z.string().max(45).email(),
//     password: z.string().max(120),
// })

export const loginSchema = userSchema.pick({
    email: true,
    password: true
});