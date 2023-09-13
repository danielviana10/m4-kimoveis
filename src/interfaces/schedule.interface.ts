import { z } from "zod"
import { scheduleCreateSchema } from "../schemas/schedules.schemas"
import { Repository } from "typeorm";
import { Schedule } from "../entities/Schedules.entity";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleRepo = Repository<Schedule>

export { ScheduleCreate, ScheduleRepo }