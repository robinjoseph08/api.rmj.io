'use strict';

let Bookshelf = require('../../libraries/bookshelf');
let RegexWord = require('./word');

module.exports = Bookshelf.Model.extend({
  tableName: 'regex_levels',
  hasTimestamps: ['date_created', 'date_modified'],
  left_words () {
    return this.hasMany(RegexWord).query((qb) => {
      qb.where('side', 'left');
    });
  },
  right_words () {
    return this.hasMany(RegexWord).query((qb) => {
      qb.where('side', 'right');
    });
  },
  serialize () {
    return {
      id: this.get('id'),
      left_words: this.related('left_words').serialize(),
      right_words: this.related('right_words').serialize()
    };
  }
});
