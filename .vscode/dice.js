var dice = {
    sides: 20,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button4');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  var button = document.getElementById('button6');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };

  var button = document.getElementById('button8');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };

  var button = document.getElementById('button10');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };

  var button = document.getElementById('button12');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };

  var button = document.getElementById('button20');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };

  var button = document.getElementById('button100');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };