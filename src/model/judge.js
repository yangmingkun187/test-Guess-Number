var _ = require('lodash');

function Judge(inputs, mathRands) {
  this.inputs = inputs;
  this.mathRands = mathRands;
}

Judge.prototype.judgeResult = function () {
  var acountA = 0;
  var acountB = 0;
  var result = '';

  for (var i = 0; i < this.mathRands.length; i++) {
    if(this.mathRands[i] === this.inputs[i]) {
      acountA += 1;
      continue;
    } else if(_.contains(this.mathRands, this.inputs[i])) {
      acountB += 1;
    }
  }

  result = acountA + 'A' + acountB + 'B';
  return result;
};

module.exports = Judge;
