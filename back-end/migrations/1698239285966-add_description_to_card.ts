import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class addDescriptionToCard1698239285966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("player", new TableColumn({
            type: 'varchar',
            name: 'description',
            isNullable: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("player", "description");
    }

}
