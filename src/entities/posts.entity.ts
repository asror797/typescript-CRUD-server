import { Entity, Column , PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Posts {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   title: string

   @Column()
   content: string

   @Column()
   created: string

}