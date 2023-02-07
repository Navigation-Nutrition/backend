/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('post', (table)=> {
        table.increments('post_id').primary();
        table.string('post_date').notNullable();
        table.string('post_message').notNullable();
        table.string('user_id').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('post')
};
