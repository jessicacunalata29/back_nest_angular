import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProviders=[
{
    provide: "DATABASE_CONNECTION",
    inject: [ConfigService],
    useFactory:(config: ConfigService)=>{
        const dataSource= new DataSource({
            type: "postgres",
            host: config.get("Host"),
            port: +config.get("PORT_DB"),
            username: config.get ("USERNAME"),
            password: config.get("PASSWORD"),
            database: config.get("DATABASE")
        });

        return dataSource.initialize();
    }
}
]

