/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTableIfNotExists('users', (table) => {
    table
      .increments('id')
      .primary();
    table.integer('userId')
      .index()
      .unique();
    table.integer('level')
      .defaultTo(1);
    table.integer('energyAmount')
      .unsigned()
      .defaultTo(1500);
    table.bigint('coinsAmount')
      .unsigned()
      .defaultTo(0);
    table.integer('coinsPerTapAmount')
      .unsigned()
      .defaultTo(1);
    table.integer('passiveCoinsAmount')
      .unsigned()
      .defaultTo(0);
    table.dateTime('lastActivityTime');
    table.dateTime('energyRecoveringTill');
    table.boolean('banned')
      .defaultTo(false);;
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists('users');
