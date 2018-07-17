
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//variables for tracking wins, losses and guesses
var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessesLeft = 9;
var letterToGuess = null;
var guessedLetters = [];

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
  // (i.e. guessesLeft will get displayed in HTML)
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// Function will be called when we reset everything
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(computerChoice)

  // when the user press a key, it will run
  document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice) {
      wins++;
    } else {
      guessesLeft--;
      
       // Lowercase the letter
  var letter = String.fromCharCode(event.which).toLowerCase();

  // Then add the guess to the guessedLetters array
  guessedLetters.push(letter);

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();

  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");

  // We'll check if there's a match.
  if (letter === letterToGuess) {
    
    }
  }

     if (guesses == 0){
       losses++
     } 
  }

  document.getElementById('wins').innerHTML = "Wins: " + wins;
  document.getElementById('losses').innerHTML = "losses: " + losses;
  document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

  //reset the game
  reset();  