'use strict';

let Bookshelf = require('../../libraries/bookshelf');

module.exports = Bookshelf.Model.extend({
  tableName: 'regex_words',
  hasTimestamps: ['date_created', 'date_modified'],
  serialize () {
    return {
      id: this.get('id'),
      value: this.get('value'),
      side: this.get('side')
    };
  }
});
