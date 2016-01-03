'use strict';

exports.up = function (knex, Promise) {
  return knex.schema.createTable('regex_words', (table) => {
    table.increments('id');
    table.string('value');
    table.string('side');
    table.integer('regex_level_id').references('id').inTable('regex_levels');
    table.timestamp('date_created').defaultTo(knex.fn.now());
    table.timestamp('date_modified').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('regex_words');
};
