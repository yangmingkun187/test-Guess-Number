describe('input', function() {
  describe('getMathRand', function() {
    it('should return correct 4 number', function() {
      var getMathRand = jest.genMockFn();
      getMathRand.mockReturnValue("1234");

      var input = {
        getMathRand : getMathRand
      };

      var mathRand = input.getMathRand();
      expect(mathRand.length === 4).toBeTruthy();
    });
  });
});
