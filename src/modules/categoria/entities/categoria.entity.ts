import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "../../producto/entities/producto.entity";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar', length:50})
  nombre: string;

  @Column({ type: 'text' })   // SOLO UNA VEZ
  detalle: string;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => Producto, (prod) => prod.categoria)
  productos: Producto[];
}
