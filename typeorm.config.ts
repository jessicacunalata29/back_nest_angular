import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Configuration } from './src/config/key';


const ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(__dirname, `.env.${ENV}`) });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env[Configuration.HOST],
  port: Number(process.env[Configuration.PORT_DB]),
  username: process.env[Configuration.USER],
  password: process.env[Configuration.PASSWORD],
  database: process.env[Configuration.DATABASE],
  synchronize: ENV === 'development',
  logging: ENV === 'development',
  entities: ['src/**/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
