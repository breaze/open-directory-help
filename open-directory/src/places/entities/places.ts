import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from "./categories";
import { Tags } from "./tags";
import { Media } from "./media";
import { PlaceTypeEnum } from "../enums/place-type-enum";

@Entity()
export class Places {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string;
    @Column()
    address:string;
    @Column({
        type: 'enum',
        enum: ['RESTAURANT', 'MUSEUM', 'PARK', 'COFFEE_SHOP'],
      })
    type:PlaceTypeEnum;
    @Column()
    schedule:string;
    @Column()
    description:string;
    @OneToOne(()=> Categories, {cascade:true})
    @JoinColumn()
    category:Categories
    @ManyToMany(()=> Tags, {cascade:true})
    @JoinTable()
    tags:Tags[];
    @OneToMany(()=> Media, (media)=>media.place)
    media:Media;

}
