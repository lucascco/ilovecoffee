import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1633207093474 implements MigrationInterface {
  name = 'SchemaSync1633207093474';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."coffee" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."coffee" RENAME COLUMN "title" TO "name"`,
    );
  }
}
