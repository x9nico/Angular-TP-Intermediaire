import { MigrationInterface, QueryRunner } from "typeorm"

export class updateDescriptionCard1707908768456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE player SET description = 'Adore le rhum' WHERE id = 1`);
        await queryRunner.query(`UPDATE player SET description = 'Pense encore que le vin blanc est de l\'eau' WHERE id = 2`);
        await queryRunner.query(`UPDATE player SET description = 'Une journée sans alcool est une journée ratée' WHERE id = 3`);
        await queryRunner.query(`UPDATE player SET description = 'Pense que l\'alcool c\'est cool car il y a le mot cool dans alcool' WHERE id = 4`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE player SET description = 'Sans description' WHERE id = 1`);
        await queryRunner.query(`UPDATE player SET description = 'Sans description' WHERE id = 2`);
        await queryRunner.query(`UPDATE player SET description = 'Sans description' WHERE id = 3`);
        await queryRunner.query(`UPDATE player SET description = 'Sans description' WHERE id = 4`);
    }

}
