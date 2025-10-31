import{Categoria}from "../../categoria/entities/categoria.entity";

//import { Categoria } from "src/modules/categoria/entities/categoria.entity";

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
        id: number;

        @Column()

        nombre:string;

        @Column()
        precio: number;

        @Column()
        stock:number;

        image: string;

        @Column()
        descripcion: string;

        @Column()
        estado: boolean;

        @ManyToOne(()=>Categoria)
        categoria: Categoria;

}

