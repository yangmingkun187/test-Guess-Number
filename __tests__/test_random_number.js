jest.dontMock('lodash');
jest.dontMock('../src/model/input');

describe('Input', function() {
  describe('.getMathRands', function() {
    it('should return correct 4 number', function() {
      var Input = require('../src/model/input');
      var _ = require('lodash');

      var mathRand = Input.getMathRands();

      expect(mathRand.length === 4).toBeTruthy();
    });
  });
});
