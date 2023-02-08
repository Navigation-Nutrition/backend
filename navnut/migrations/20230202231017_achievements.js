/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('achievements', (table) => {
        table.increments('achievements_id').primary();
        table.integer('user_id').references('user_id').inTable('users');
        table.integer('task_completed').notNullable();
        table.integer('quiz_grade').notNullable();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('achievements')
};
