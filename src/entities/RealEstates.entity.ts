import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Adressess.entity";
import { Category } from "./Categories.entity";
import { Schedule } from "./Schedules.entity";

@Entity("RealEstate")
export class RealEstate{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0})
    value: number | string;

    @Column()
    size: number;

    @CreateDateColumn({ type: "date"})
	createAt: string;

    @UpdateDateColumn({ type: "date" })
	updateAt: string;

    @OneToMany(() => Schedule, (s) => s.realEstate)
    schedules: Array<Schedule>

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category)
    @JoinColumn()
    categories: Array<Category>;

}