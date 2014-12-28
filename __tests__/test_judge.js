jest.dontMock('../src/model/judge');
jest.dontMock('lodash');

describe('judge', function() {
  describe('#judgeResult', function() {
    it('should return correct string is 4A0B', function() {
      var Judge = require('../src/model/judge');
      var _ = require('lodash');
      var inputs = [1,2,3,4];
      var mathRands = [1,2,3,4];

      var judge = new Judge(inputs, mathRands);

      var result = judge.judgeResult();

      expect(result).toBe('4A0B');
    });

    it('should return correct string is 2A2B', function() {
      var Judge = require('../src/model/judge');
      var _ = require('lodash');
      var inputs = [1,2,4,3];
      var mathRands = [1,2,3,4];

      var judge = new Judge(inputs, mathRands);

      var result = judge.judgeResult();

      expect(result).toBe('2A2B');
    });

    it('should return correct string is 0A0B', function() {
      var Judge = require('../src/model/judge');
      var _ = require('lodash');
      var inputs = [5,6,7,8];
      var mathRands = [1,2,3,4];

      var judge = new Judge(inputs, mathRands);

      var result = judge.judgeResult();

      expect(result).toBe('0A0B');
    });

    it('should return correct string is 0A4B', function() {
      var Judge = require('../src/model/judge');
      var _ = require('lodash');
      var inputs = [4,3,2,1];
      var mathRands = [1,2,3,4];

      var judge = new Judge(inputs, mathRands);

      var result = judge.judgeResult();

      expect(result).toBe('0A4B');
    });
  });
});
