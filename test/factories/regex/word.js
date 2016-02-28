'use strict';

Factory.define('regex-word')
  .sequence('id')
  .sequence('value', (i) => `testing${i}`)
  .attr('side')
  .attr('regex_level_id');

Factory.define('regex-word-left')
  .extend('regex-word')
  .attr('side', 'left');

Factory.define('regex-word-right')
  .extend('regex-word')
  .attr('side', 'right');
