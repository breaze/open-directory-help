import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Places } from "./places";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;

}
