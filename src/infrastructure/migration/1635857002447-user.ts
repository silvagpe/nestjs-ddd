import {MigrationInterface, QueryRunner} from "typeorm";

export class user1635857002447 implements MigrationInterface {
    name = 'user1635857002447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "registredAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
