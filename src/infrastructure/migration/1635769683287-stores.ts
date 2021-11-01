import {MigrationInterface, QueryRunner} from "typeorm";

export class stores1635769683287 implements MigrationInterface {
    name = 'stores1635769683287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "store" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL, "email" character varying NOT NULL, "registredAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "store"`);
    }

}
