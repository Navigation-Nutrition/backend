/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('achievements', (table) => {
        table.increments('achievements_id').primary();
        table.string('user_id').notNullable();
        table.integer('task_completed').notNullable();
        table.integer('quiz_grade').notNullable();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
