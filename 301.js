// Game mode 301
console.log("Initiating new game of 301");
console.log('Player 1 Score: 301 \nPlayer 2 Score: 301');
console.log("Player 1 Now Throwing");

var playerScore1 = 301;
var currentThrow = "T10";
var throwInt = parseInt(currentThrow.slice(1));
var throwVal;

// is the current throw multiplied by any value?
multiplier = function() {
    if (currentThrow.charAt(0) == "D") {
        throwVal = throwInt * 2;
    } else {
        if (currentThrow.charAt(0) == "T") {
            throwVal = throwInt * 3;
        }
    }
};
multiplier();
console.log(throwVal)
