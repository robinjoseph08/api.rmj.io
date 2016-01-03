'use strict';

let Bookshelf = require('bookshelf');

let Knex = require('./knex');

module.exports = Bookshelf(Knex);
