import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694616194366 implements MigrationInterface {
    name = 'InitialMigration1694616194366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Address" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" integer NOT NULL, "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_9034683839599c80ebe9ebb0891" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Category" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, CONSTRAINT "UQ_0ac420e8701e781dbf1231dc230" UNIQUE ("name"), CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "createAt" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "deleteAt" date, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "RealEstate" ("id" SERIAL NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL DEFAULT '0', "size" integer NOT NULL, "createAt" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "categoriesId" integer, CONSTRAINT "PK_1e80687649717ed24e73ed8ba9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Schedule" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" date NOT NULL, "realEstateId" integer, "userId" integer, CONSTRAINT "PK_1e0db675cb5a22276ffd69b1a5a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "FK_a78f949fa2a97cda6afcfbe4dd3" FOREIGN KEY ("categoriesId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD CONSTRAINT "FK_47f1b15d5bf112ff05ecad452c8" FOREIGN KEY ("realEstateId") REFERENCES "RealEstate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Schedule" ADD CONSTRAINT "FK_a655e58df86f8c68b7710b76639" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Schedule" DROP CONSTRAINT "FK_a655e58df86f8c68b7710b76639"`);
        await queryRunner.query(`ALTER TABLE "Schedule" DROP CONSTRAINT "FK_47f1b15d5bf112ff05ecad452c8"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "FK_a78f949fa2a97cda6afcfbe4dd3"`);
        await queryRunner.query(`DROP TABLE "Schedule"`);
        await queryRunner.query(`DROP TABLE "RealEstate"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Category"`);
        await queryRunner.query(`DROP TABLE "Address"`);
    }

}
