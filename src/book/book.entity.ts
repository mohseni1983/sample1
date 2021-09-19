import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Book extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    name:string
    @Column()
    writer:string
    @Column()
    page:number
}