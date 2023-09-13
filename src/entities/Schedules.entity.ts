import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { RealEstate } from "./RealEstates.entity";

@Entity("Schedule")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "date" })
	date: string;

    @Column({ type: "date" })
	hour: string ;

    @ManyToOne(() => RealEstate, (rs) => rs.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User)
    user: User;
}