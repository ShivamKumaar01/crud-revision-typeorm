import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Test {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 30 })
    title: string;

    @Column({ type: 'varchar', length: 300 })
    description: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
