import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gato {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    raca: string;

    @Column()
    idade: number;
}