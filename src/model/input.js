var _ = require('lodash');

function Input() {

}

Input.getMathRands = function() {
  var number = 0;
  var mathRands = [];

  while (mathRands.length < 4) {
    number = _.random(0, 9);
    if (!_.contains(mathRands, number.toString())) {
      mathRands.push(number.toString());
    }
  }
  return mathRands;
};

module.exports = Input;
