/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('post', (table)=> {
        table.increments('post_id').primary();
        table.date('post_date').notNullable();
        table.string('post_message').notNullable();
        table.integer('user_id').references('user_id').inTable('users');
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('post')
};
