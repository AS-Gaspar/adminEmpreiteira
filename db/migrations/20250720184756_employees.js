/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
    return knex.schema
    .createTable('employees', table => {
        table.increments('id'),
        table.string('name', 255).notNullable(),
        table.string('company', 255).notNullable(),
        table.string('profession', 255).notNullable(),
        table.integer('daily_value').unsigned().notNullable(),
        table.specificType('days_worked', 'REAL').unsigned().notNullable(),
        table.integer('work_id').unsigned().references('id').inTable('works')
        table.timestamps(true, true)
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
    return knex.schema.dropTable('employees')
}

export const config = { transaction: false }
