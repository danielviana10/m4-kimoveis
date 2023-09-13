import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations21694616326107 implements MigrationInterface {
    name = 'AddRelations21694616326107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "UQ_5cddc16f08ac35e548b39a3fa9d" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "FK_5cddc16f08ac35e548b39a3fa9d" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "FK_5cddc16f08ac35e548b39a3fa9d"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "UQ_5cddc16f08ac35e548b39a3fa9d"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP COLUMN "addressId"`);
    }

}
