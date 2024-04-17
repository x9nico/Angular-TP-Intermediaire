import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class createUsersTable1679933977703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    new TableColumn({
                        type: 'int',
                        name: 'id',
                        isGenerated: true,
                        isPrimary: true,
                        isUnique: true
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '50',
                        name: 'username',
                        isUnique: true,
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '255',
                        name: 'password',
                        isNullable: false
                    }),
                ]
            }),


        );

        await queryRunner.createTable(
            new Table({
                name: 'player',
                columns: [
                    new TableColumn({
                        type: 'int',
                        name: 'id',
                        isGenerated: true,
                        isPrimary: true,
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '255',
                        name: 'name',
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'int',
                        name: 'age',
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '255',
                        name: 'nationality',
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'varchar',
                        name: 'poste',
                        length: '20',
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'varchar',
                        name: 'image',
                        length: '255',
                        isNullable: false
                    }),
                ]
            }),

        );

        await queryRunner.query(`INSERT INTO user (id, username, password) 
            VALUES 
              (1, 'test', 'test')`);

        await queryRunner.query(`INSERT INTO player (id, name, age, nationality, poste, image) 
            VALUES 
              (1, 'Nicolas', 20, 'Français', 'ShooterMan', 'https://nicolas-raynaud.fr/images/angular/nico.jpg'),
              (2, 'Guillaume', 34, 'Français', 'Oenologue', 'https://nicolas-raynaud.fr/images/angular/guillaume.png'),
              (3, 'Lorène', 26, 'Française', 'Poche', 'https://nicolas-raynaud.fr/images/angular/lorene.png'),
              (4, 'Romain', 23, 'Français', 'Pillier de Bar', 'https://nicolas-raynaud.fr/images/angular/romain.png');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
        await queryRunner.dropTable('player');
    }
}