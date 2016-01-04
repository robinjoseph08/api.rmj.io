'use strict';

let expect = require('chai').expect;

let Controller = require('../../../../app/plugins/features/regex/controller');
let Knex       = require('../../../../app/libraries/knex');

let defaultLevel = require('../../../fixtures/regex/levels/default');
let leftWord     = require('../../../fixtures/regex/words/left');
let rightWord    = require('../../../fixtures/regex/words/right');

describe('regex controller', () => {

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

    it('gets all regex levels', () => {
      return Controller.list()
      .then((levels) => {
        expect(levels).to.have.length(1);
        expect(levels.at(0).get('id')).to.eql(defaultLevel.id);
      });
    });

  });

});
