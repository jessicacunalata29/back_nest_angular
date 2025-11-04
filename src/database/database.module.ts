import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [
     ConfigModule,
     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({

 type: 'postgres',
        host: config.get('Host') || 'localhost',
        port: +config.get('PORT_DB'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}'],
})
    }),
  ],

    providers: [...databaseProviders, ConfigService],
    exports: [...databaseProviders]
})
export class DatabaseModule {}
