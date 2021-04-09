import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { boolean } from "yup/lib/locale";

export class index1615859858727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Service',
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
                    name: 'marketStatus',
                    type: 'boolean',
                    isNullable: false
                },

                {
                    name: 'price',
                    type: 'integer',
                    isNullable: false
                },

                {
                    name: 'founds',
                    type: 'float',
                    isNullable: false
                },

                {
                    name: 'size',
                    type: 'float',
                    isNullable: false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Service')
    }

}
