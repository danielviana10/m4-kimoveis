import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Address")
export class Address{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    street: string;

    @Column({ length: 8 })
    zipCode: string;

    @Column()
    number: number;

    @Column({ length: 20 })
    city: string;

    @Column({ length: 2 })
    state: string;
}