var Input = require('./model/input');
var Printer = require('./model/printer');
var Judge = require('./model/judge');
var readline = require('readline');
var _ = require('lodash');

function gameStart() {
  var mathRands = Input.getMathRands();
  var headText = Printer.printHead();
  console.log(headText);
  var ChallengingTimes = 0;

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', function(inputs) {
    var judge = new Judge(_.toArray(inputs), ['1','2','3','4']);
    var result = judge.judgeResult();

    var printer = new Printer(result, 0);
    var resultText = printer.printResult();
    if(resultText === 'congratulations!') {
      console.log(resultText);
      rl.close();
    } else {
      console.log(resultText + 'but you only have ' + (6 - ChallengingTimes) + ' times!');
    }
  });
}

gameStart();
