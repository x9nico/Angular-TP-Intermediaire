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
              (1, 'Nicolas', 20, 'Français', 'ShooterMan', 'https://images-ext-1.discordapp.net/external/a1NR9pgQjwdcDQ2u7ll9m7WZYFN6fymz5nxFDtr6pto/%3Fw%3D270%26h%3D270%26c%3D6%26r%3D0%26o%3D5%26pid%3DImgGn/https/th.bing.com/th/id/OIG.sDmOQhjJCpjC9kQ_2hoN?format=webp'),
              (2, 'Guillaume', 34, 'Français', 'Oenologue', 'https://cdn.discordapp.com/attachments/1070450741052973056/1184480057239015514/338b0a54-6a2d-4fc4-8b61-1693a32489bf.jpg?ex=658c2004&is=6579ab04&hm=9e31b427480675fad666f8bba4bd02139026d23f0b59e3e1e805d11d3eefe631&'),
              (3, 'Lorène', 26, 'Française', 'Poche', 'https://media.discordapp.net/attachments/1070450741052973056/1184466099077660713/6522c8a8-5245-4bc1-a3f9-00d6800c2ca7.jpg?ex=658c1304&is=65799e04&hm=8871da5134e787730baca583b55abbf09656beef4499b5325c0ce2dcbd508799&=&format=webp&width=463&height=463'),
              (4, 'Romain', 23, 'Asiatique', 'Pillier de Bar', 'https://images-ext-1.discordapp.net/external/xzJJP9ac82IYijGSeKz_meuAwWMQk6PYvBQIr2xMB9M/%3Fw%3D270%26h%3D270%26c%3D6%26r%3D0%26o%3D5%26pid%3DImgGn/https/th.bing.com/th/id/OIG.5LD6Qr_UwAVEx.TeyMcO?format=webp');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
        await queryRunner.dropTable('player');
    }
}