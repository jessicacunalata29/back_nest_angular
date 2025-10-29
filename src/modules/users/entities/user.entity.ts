// user.entity.ts
import { Persona } from "../../persona/entities/persona.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity('app_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  password: string;

  @OneToOne(() => Persona, persona => persona.user)
  persona: Persona;
}
