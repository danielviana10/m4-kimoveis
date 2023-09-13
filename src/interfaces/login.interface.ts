import { z } from "zod";
import { loginSchema } from "../schemas/login.schemas";

export type LoginRequest = z.infer<typeof loginSchema>;