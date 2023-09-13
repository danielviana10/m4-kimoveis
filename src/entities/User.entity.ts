import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";

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

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const hasRounds: number = getRounds(this.password);
        if(!hasRounds){
            this.password = hashSync(this.password, 10);
        }
    }
}