const { Knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('friends', (table) => {
    table.increments('friendship_id').primary();
    table.integer('user_id').references('user_id').inTable('users');
    table.integer('friend_id').notNullable()

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.dropTable('friends')
};
