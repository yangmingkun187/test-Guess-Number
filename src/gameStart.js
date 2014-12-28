var Input = require('./model/input');
var Printer = require('./model/printer');
var Judge = require('./model/judge');
var readline = require('readline');
var _ = require('lodash');

function gameStart() {
  var mathRands = Input.getMathRands();
  var headText = Printer.printHead();
  var times = 6;
  console.log(headText);

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', function(inputs) {
    times -= 1;
    var judge = new Judge(_.toArray(inputs), mathRands);
    var result = judge.judgeResult();

    var printer = new Printer(result, times);
    var resultText = printer.printResult();
    if(resultText === 'congratulations!' || times === 0) {
      console.log(resultText);
      rl.close();
    } else {
      console.log(resultText);
    }
  });
}

gameStart();
