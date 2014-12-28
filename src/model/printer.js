function Printer(result) {
  this.result = result;
}

Printer.printHead = function() {
  var headText = 'welcome to play this game' + '\n' + 'you should input 4 number';
  return headText;
};

Printer.prototype.printResult = function () {
  var resultText = '';
  if(this.result === '4A0B') {
    resultText = 'congratulations!';
  } else {
    resultText = 'sorry! you answer is' + this.result + '\nyou can try again!';
  }
  return resultText;
};

module.exports = Printer;
