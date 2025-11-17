import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "../../producto/entities/producto.entity";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })   // SOLO UNA VEZ
  detalle: string;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => Producto, (prod) => prod.categoria)
  productos: Producto[];
}
