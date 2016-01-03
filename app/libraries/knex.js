'use strict';

let Knex = require('knex');

let DatabaseConfig = require('../../db');

module.exports = Knex(DatabaseConfig);
