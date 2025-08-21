import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsernameToUser755609342233 implements MigrationInterface {
  name = 'Migrations1755609342233';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "username" character varying(50) NOT NULL `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
  }
}
