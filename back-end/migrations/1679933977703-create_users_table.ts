import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class createUsersTable1679933977703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns:[
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
                columns:[
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
              (1, 'Mbappe', 25, 'Français', 'BU', 'https://futhead.cursecdn.com/static/img/23/players/231747.png'),
              (2, 'Messi', 34, 'Argentin', 'AD', 'https://futhead.cursecdn.com/static/img/23/players/158023.png'),
              (3, 'Neymar', 31, 'Brésilien', 'AG', 'https://futhead.cursecdn.com/static/img/23/players/190871.png'),
              (4, 'Ronaldo', 38, 'Portugais', 'AG', 'https://futhead.cursecdn.com/static/img/23/players/20801.png');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
        await queryRunner.dropTable('player');
    }
}