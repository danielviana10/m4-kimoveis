import { z } from "zod";
import { userReturnSchema, userSchema } from "./user.schemas";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    user: userReturnSchema,
});

const scheduleCreateSchema = scheduleSchema.omit({
    id: true,
    user: true,
});

export { scheduleSchema, scheduleCreateSchema };