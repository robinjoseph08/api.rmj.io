'use strict';

const Knex   = require('../../../../app/libraries/knex');
const Server = require('../../../../app/server');

const defaultLevel = Factory.build('regex-level');
const leftWord     = Factory.build('regex-word-left', { regex_level_id: defaultLevel.id });
const rightWord    = Factory.build('regex-word-right', { regex_level_id: defaultLevel.id });

describe('regex integration', () => {

  beforeEach(() => {
    return Promise.all([
      Knex.raw('TRUNCATE regex_levels CASCADE'),
      Knex.raw('TRUNCATE regex_words CASCADE')
    ])
    .then(() => Knex('regex_levels').insert(defaultLevel))
    .then(() => Knex('regex_words').insert([leftWord, rightWord]));
  });

  describe('list', () => {

    it('correctly retrieves and serializes', () => {
      return Server.injectThen({
        url: '/regex',
        method: 'GET'
      })
      .then((res) => {
        expect(res.statusCode).to.eql(200);
        expect(res.result).to.have.length(1);
        expect(res.result[0].id).to.eql(defaultLevel.id);
      });
    });

  });

});
