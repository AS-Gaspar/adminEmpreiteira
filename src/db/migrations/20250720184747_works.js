/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema
    .createTable('works', table => {
        table.increments('id').primary(),
        table.string('name', 255).notNullable,
        table.string('builder', 255).notNullable,
        table.string('address', 255).notNullable,
        table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
    return knex.schema.dropTable('works')  
}

export const config = { transaction: false }