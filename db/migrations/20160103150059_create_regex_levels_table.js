'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('regex_levels', (table) => {
    table.increments('id');
    table.timestamp('date_created').defaultTo(knex.fn.now());
    table.timestamp('date_modified').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('regex_levels');
};
