import {Column, Entity, JoinColumn, OneToOne,PrimaryGeneratedColumn} from "typeorm";
import { Persona } from "../../persona/entities/persona.entity";

@Entity('app_user')  // en vez de "user"
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  password: string;

@OneToOne(() => Persona, persona => persona.user, {cascade: true})
persona: Persona;
}
