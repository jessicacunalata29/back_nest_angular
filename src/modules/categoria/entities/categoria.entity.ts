import { Producto } from "src/modules/producto/entities/producto.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  detalle: string;

  @OneToMany(()=>Producto,(prod)=>prod.categoria)
  productos:Producto[]
}
