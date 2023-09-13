import { AppDataSource } from "./data-source";
import { Category } from "./entities/Categories.entity";
import { Schedule } from "./entities/Schedules.entity";
import { User } from "./entities/User.entity";
import { UserRepo } from "./interfaces";
import { CategoryRepo } from "./interfaces/category.interface";
import { ScheduleRepo } from "./interfaces/schedule.interface";

export const userRepo: UserRepo = AppDataSource.getRepository(User);
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);
export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
