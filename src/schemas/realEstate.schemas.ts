import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./addresses.schemas";
import { categoryCreateSchema } from "./category.schemas";
import { userReturnSchema } from "./user.schemas";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().default(0),
    size: z.number(),
    createAt: z.string(),
    updateAt: z.string(),
    address: addressCreateSchema.array(),
    category: categoryCreateSchema.array()
});

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    createAt: true,
    updateAt: true
}).extend({
    address: addressCreateSchema.array(),
    category: categoryCreateSchema.array()
})

const realEstateReturn = realEstateSchema.extend({
    user: userReturnSchema,
    address: addressSchema.nullish(),
});

export { realEstateSchema, realEstateCreateSchema, realEstateReturn };