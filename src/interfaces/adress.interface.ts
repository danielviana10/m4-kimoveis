import { z } from "zod";
import { Repository } from "typeorm";
import { addressCreateSchema } from "../schemas/addresses.schemas";
import { Address } from "cluster";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressRepo = Repository<Address>

export { AddressCreate, AddressRepo }