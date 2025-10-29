import { ConfigService } from '../config/config.service'; // <- tu ConfigService
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION_POSTGRES',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT') || 5432,
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || '12345',
        database: config.get('DATABASE'),
        entities: [__dirname + '/../*/.entity{.ts,.js}'],
      });
      return dataSource.initialize();
    },
  },
];