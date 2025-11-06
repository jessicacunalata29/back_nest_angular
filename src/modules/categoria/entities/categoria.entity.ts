import {Column, Entity, OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {Producto} from "../../producto/entities/producto.entity";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  detalle: string;

  @OneToMany(() => Producto, (prod) => prod.categoria)
  productos: Producto[];
}
