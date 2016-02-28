'use strict';

const Controller = require('../../../../app/plugins/features/regex/controller');
const Knex       = require('../../../../app/libraries/knex');

const defaultLevel = Factory.build('regex-level');
const leftWord     = Factory.build('regex-word-left', { regex_level_id: defaultLevel.id });
const rightWord    = Factory.build('regex-word-right', { regex_level_id: defaultLevel.id });

describe('regex controller', () => {

  beforeEach(() => {
    return Promise.all([
      Knex.raw('TRUNCATE regex_levels CASCADE'),
      Knex.raw('TRUNCATE regex_words CASCADE')
    ])
    .then(() => Knex('regex_levels').insert(defaultLevel))
    .then(() => Knex('regex_words').insert([leftWord, rightWord]));
  });

  describe('list', () => {

    it('gets all regex levels', () => {
      return Controller.list()
      .then((levels) => {
        expect(levels).to.have.length(1);
        expect(levels.at(0).get('id')).to.eql(defaultLevel.id);
      });
    });

  });

});
