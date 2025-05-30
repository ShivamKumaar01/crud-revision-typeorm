import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id:number

      @Column({ type: 'varchar', length: 30 })
      title: string;

      @Column({type:'varchar',length:300})
      description:string
}
