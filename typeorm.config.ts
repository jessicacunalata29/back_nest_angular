// src/data-source.ts
import { config } from "dotenv";
import { DataSource } from "typeorm";

// Cargar variables de entorno
config({
  path: '.env.development', // asegúrate que este archivo exista
  override: true,
  debug: true,
});


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,             // localhost
  port: +process.env.PORT_DB!,        // 5432
  username: process.env.USERNAME,     // postgres
  password: process.env.PASSWORD,     // 1234
  database: process.env.DATABASE,     // backend_jessicacunalata
  entities: ['src/**/*.entity{.ts,.js}'],    // todas las entidades
  migrations: ['src/database/migrations/*{.ts,.js}'],
  synchronize: false,                 // mejor false en producción
  logging: true,
});
