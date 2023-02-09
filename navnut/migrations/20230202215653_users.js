/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('user_name').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('achievement_id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
