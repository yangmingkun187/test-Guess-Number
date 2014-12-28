function Printer(result, times) {
  this.result = result;
  this.times = times;
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
    resultText = 'sorry! you answer is ' + this.result +
          '\nyou can try again!' + 'but you only have ' +
          this.times + ' times!';
  }
  if (this.times === 0) {
    resultText = 'you answer is ' + this.result +'\ngame over!';
  }


  return resultText;
};

module.exports = Printer;
