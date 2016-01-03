'use strict';

let RegexLevel = require('../../../models/regex/level');

exports.list = function () {
  return new RegexLevel()
  .query((qb) => {
    qb.orderBy('id', 'asc');
  })
  .fetchAll({ withRelated: ['left_words', 'right_words'] });
};
