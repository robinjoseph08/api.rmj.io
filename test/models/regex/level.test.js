'use strict';

let expect = require('chai').expect;

let Knex       = require('../../../app/libraries/knex');
let RegexLevel = require('../../../app/models/regex/level');
let RegexWord  = require('../../../app/models/regex/word');

let defaultLevel = require('../../fixtures/regex/levels/default');
let leftWord     = require('../../fixtures/regex/words/left');
let rightWord    = require('../../fixtures/regex/words/right');

describe('regex level model', () => {

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

  describe('left_words', () => {

    it('only lists left words', () => {
      return new RegexLevel({ id: defaultLevel.id })
      .fetch({ withRelated: ['left_words'] })
      .then((level) => {
        expect(level.related('left_words')).to.have.length(1);
        expect(level.related('left_words').at(0).get('id')).to.eql(leftWord.id);
      });
    });

  });

  describe('right_words', () => {

    it('only lists right words', () => {
      return new RegexLevel({ id: defaultLevel.id })
      .fetch({ withRelated: ['right_words'] })
      .then((level) => {
        expect(level.related('right_words')).to.have.length(1);
        expect(level.related('right_words').at(0).get('id')).to.eql(rightWord.id);
      });
    });

  });

  describe('serialize', () => {

    let left;
    let right;
    let level;

    beforeEach(() => {
      left = RegexWord.collection([
        RegexWord.forge({ id: 1, value: 'testing1', side: 'left' }),
        RegexWord.forge({ id: 2, value: 'testing2', side: 'left' })
      ]);
      right = RegexWord.collection([
        RegexWord.forge({ id: 3, value: 'testing3', side: 'right' }),
        RegexWord.forge({ id: 4, value: 'testing4', side: 'right' }),
        RegexWord.forge({ id: 5, value: 'testing5', side: 'right' })
      ]);
      level = RegexLevel.forge({ id: 1 });
      level.relations.left_words = left;
      level.relations.right_words = right;
    });

    it('returns the correct properties', () => {
      let json = level.serialize();

      expect(json).to.have.all.keys('id', 'left_words', 'right_words');
      expect(json.id).to.eql(level.get('id'));
      left.each((word, i) => {
        expect(json.left_words[i]).to.eql(word.serialize());
      });
      right.each((word, i) => {
        expect(json.right_words[i]).to.eql(word.serialize());
      });
    });

  });

});
