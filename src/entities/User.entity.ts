import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedule } from "./Schedules.entity";
import { RealEstate } from "./RealEstates.entity";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45})
    name: string;

    @Column({ length: 45})
    email: string;

    @Column({ length: 120})
	password: string;

    @Column({ default: false})
    admin: boolean;

    @CreateDateColumn({ type: "date"})
	createdAt: string;

    @UpdateDateColumn({ type: "date" })
	updatedAt: string;

    @DeleteDateColumn({ type: "date"})
	deletedAt: string | null;

}