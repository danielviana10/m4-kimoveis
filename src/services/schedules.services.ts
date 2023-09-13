import { Schedule } from "../entities/Schedules.entity";
import { User } from "../entities/User.entity";
import { ScheduleCreate } from "../interfaces/schedule.interface";
import { scheduleRepo } from "../repositories";
import { scheduleSchema } from "../schemas/schedules.schemas";

const create = async (payload: ScheduleCreate, user: User): Promise <any> => {
    const schedule: Schedule = scheduleRepo.create({
        ...payload,
        user,
    });

    await scheduleRepo.save(schedule);

    return scheduleSchema.parse(schedule);
};

export default { create }