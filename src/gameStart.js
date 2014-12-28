var Input = require('./model/input');
var Printer = require('./model/printer');
var Judge = require('./model/judge');

function gameStart() {
  var ChallengingTimes = 6;
  for (var i = 0; i < ChallengingTimes; i++) {
    var mathRands = Input.getMathRands();
    Printer.printHead();
    var inputs = Input.getInputs();
    var judge = new Judge(inputs, mathRands);
    var result = judge.judgeResult();

    var printer = new Printer(result);
    var resultText = printer.printResult();
    if(resultText === 'congratulations!') {
      console.log(resultText);
      break;
    } else {
      console.log(resultText);
    }
  }
}
