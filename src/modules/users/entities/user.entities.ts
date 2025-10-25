import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('app_user')  // en vez de "user"
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  password: string;
}
