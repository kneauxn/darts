// Game mode 301
console.log("Initiating new game of 301");
console.log('Player 1 Score: 301 \nPlayer 2 Score: 301');
console.log("Player 1 Now Throwing");

var playerScore1 = 301;
var currentThrow = "10";
var throwInt = parseInt(currentThrow.slice(1));
var throwVal;
var throwValid;

// is the input of currentThrow valid?
throwValidation = function() {
// is the input the right length?
  if (currentThrow <= 3) {
      throwValid = false
  }
};

// is the current throw multiplied by any value?
multiplier = function() {
// is it a double?
    if (currentThrow.charAt(0) == "D") {
        throwVal = throwInt * 2;
    } else if (currentThrow.charAt(0) == "T") {
            throwVal = throwInt * 3;
        }
};
multiplier();
console.log(throwVal);
