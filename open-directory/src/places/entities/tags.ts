import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Places } from "./places";

@Entity()
export class Tags { 
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @ManyToMany(()=> Places)
    places:Places[]
}
