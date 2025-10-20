import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProviders=[
{
    provide: "DATABASE_CONNECTION",
    inject: [ConfigService],
    useFactory:(config: ConfigService)=>{
        const dataSource= new DataSource({
            type: "postgres",
            host: config.get("Host") || 'localhost',
            port: +config.get("PORT_DB"),
            username: config.get ("USERNAME")|| 'root',
            password: config.get("PASSWORD")|| 'prueba',
            database: config.get("DATABASE")
        });

        return dataSource.initialize();
    }
}
]

