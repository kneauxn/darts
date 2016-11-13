
// Game mode 301
console.log("Initiating new game of 301");

var playerScore1 = 301;
var playerScore2 = 301;

console.log('Player 1 Score: ' + playerScore1 + '\nPlayer 2 Score: ' + playerScore2);
console.log("Player 1 Now Throwing");

var currentThrow = "10";
var throwInt;
var throwVal;

inputValid = function () {
    switch (currentThrow){

    }
}

// is the current throw multiplied by any value?
multiplier = function() {
    if (currentThrow.charAt(0) == "D") {
        throwInt = currentThrow.slice(1);
        throwval = 2 * parseInt(throwInt);
    }
    else if (currentThrow.charAt(0) == "T") {
        throwInt = currentThrow.slice(1);
        throwVal = 3 * parseInt(throwInt);
    }
// if it is not multiplied the value stays as is
    else {
        throwInt = parseInt(currentThrow);
        throwVal = parseInt(currentThrow);
    }
};
multiplier();

playerScore1 = playerScore1 - throwVal;

console.log("Current Throw = " + currentThrow);
console.log("Throw Gore = " + throwInt);
console.log("Value of Throw = " + throwVal);
console.log("Player 1 New Score: " + playerScore1);