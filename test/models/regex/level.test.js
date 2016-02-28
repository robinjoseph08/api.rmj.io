'use strict';

const Knex       = require('../../../app/libraries/knex');
const RegexLevel = require('../../../app/models/regex/level');
const RegexWord  = require('../../../app/models/regex/word');

const defaultLevel = Factory.build('regex-level');
const leftWord     = Factory.build('regex-word-left', { regex_level_id: defaultLevel.id });
const rightWord    = Factory.build('regex-word-right', { regex_level_id: defaultLevel.id });

describe('regex level model', () => {

  beforeEach(() => {
    return Promise.all([
      Knex.raw('TRUNCATE regex_levels CASCADE'),
      Knex.raw('TRUNCATE regex_words CASCADE')
    ])
    .then(() => Knex('regex_levels').insert(defaultLevel))
    .then(() => Knex('regex_words').insert([leftWord, rightWord]));
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
        RegexWord.forge(Factory.build('regex-word-left')),
        RegexWord.forge(Factory.build('regex-word-left'))
      ]);
      right = RegexWord.collection([
        RegexWord.forge(Factory.build('regex-word-right')),
        RegexWord.forge(Factory.build('regex-word-right')),
        RegexWord.forge(Factory.build('regex-word-right'))
      ]);
      level = RegexLevel.forge(defaultLevel);
      level.relations.left_words = left;
      level.relations.right_words = right;
    });

    it('returns the correct properties', () => {
      const json = level.serialize();

      expect(json).to.have.all.keys('id', 'left_words', 'right_words');
      expect(json.id).to.eql(level.get('id'));
      left.each((word, i) => expect(json.left_words[i]).to.eql(word.serialize()));
      right.each((word, i) => expect(json.right_words[i]).to.eql(word.serialize()));
    });

  });

});
