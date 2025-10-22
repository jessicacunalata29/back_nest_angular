import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1761094580570 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "app_user" (
                "id" SERIAL PRIMARY KEY,
                "nombre" varchar NOT NULL,
                "email" varchar NOT NULL,
                "password" varchar NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_user"`);
    }
}
