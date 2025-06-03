import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Testing {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    testing: string


    @Column()
    test: string
}
