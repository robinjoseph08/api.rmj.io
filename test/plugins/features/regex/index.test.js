'use strict';

let expect = require('chai').expect;

let Knex   = require('../../../../app/libraries/knex');
let Server = require('../../../../app/server');

let defaultLevel = require('../../../fixtures/regex/levels/default');
let leftWord     = require('../../../fixtures/regex/words/left');
let rightWord    = require('../../../fixtures/regex/words/right');

describe('regex integration', () => {

  beforeEach(() => {
    return Promise.all([
      Knex.raw('TRUNCATE regex_levels CASCADE'),
      Knex.raw('TRUNCATE regex_words CASCADE')
    ])
    .then(() => {
      return Knex('regex_levels').insert(defaultLevel);
    })
    .then(() => {
      return Knex('regex_words').insert([leftWord, rightWord]);
    });
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
