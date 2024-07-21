/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTableIfNotExists('invitedFriends', (table) => {
    table.increments();
    table.text('userId')
      .index()
      .unsigned()
      .references('userId')
      .inTable('users');
    table.text('friendId');
    table.dateTime('deletedAt');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists('invitedFriends');
