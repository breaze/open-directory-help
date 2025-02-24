import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MediaTypeEnum } from "../enums/media-type-enum";
import { Places } from "./places";
import { Categories } from "./categories";

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id:number;
    @Column(
            {
                type: 'enum',
                enum: ['IMAGE, URL'],
            }
        )
    type: MediaTypeEnum;
    @Column()
    content:string;
    @Column()
    description:string
    @ManyToOne(()=> Places, (places)=> places.media)
    @JoinColumn()
    place:Places
}
