'use strict';

let expect = require('chai').expect;

let RegexWord = require('../../../app/models/regex/word');

describe('regex word model', () => {

  let word;

  beforeEach(() => {
    word = RegexWord.forge({ id: 1, value: 'testing', side: 'left' });
  });

  describe('serialize', () => {

    it('returns the correct properties', () => {
      let json = word.serialize();

      expect(json).to.have.all.keys('id', 'value', 'side');
      expect(json.id).to.eql(word.get('id'));
      expect(json.value).to.eql(word.get('value'));
      expect(json.side).to.eql(word.get('side'));
    });

  });

});
