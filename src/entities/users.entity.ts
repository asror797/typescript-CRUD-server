import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {
   @PrimaryGeneratedColumn()
   id:number

   @Column({
      type: "varchar",
      length:64,
      nullable:false
   })
   firstname:string

   @Column({
      type: "varchar",
      length: 64,
      nullable: false
   })
   lastname:string

   @Column({
      type: "varchar",
      length: 64,
      nullable: false
   })
   email:string
}