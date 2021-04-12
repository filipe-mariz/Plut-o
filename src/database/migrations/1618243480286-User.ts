import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1618243480286 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'User',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },

                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },

                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },

                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                    
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('User')
    }

}
