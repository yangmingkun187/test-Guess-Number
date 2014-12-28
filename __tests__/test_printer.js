jest.dontMock('../src/model/printer');

describe('printer', function() {
  describe('.printHead', function() {
    it('should return correct string is game start ...', function() {
      var Printer = require('../src/model/printer');

      var headText = Printer.printHead();
      expect(headText).toBe('welcome to play this game\nyou should input 4 number');
    });
  });
});
