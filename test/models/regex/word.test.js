'use strict';

const RegexWord = require('../../../app/models/regex/word');

const defaultWord = Factory.build('regex-word-left');

describe('regex word model', () => {

  describe('serialize', () => {

    it('returns the correct properties', () => {
      const json = RegexWord.forge(defaultWord).serialize();

      expect(json).to.have.all.keys('id', 'value', 'side');
      expect(json.id).to.eql(defaultWord.id);
      expect(json.value).to.eql(defaultWord.value);
      expect(json.side).to.eql(defaultWord.side);
    });

  });

});
