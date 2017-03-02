var wordsToPlay = [
	["4", "G", "E", "E", "K", "S"],
  	["J","A","V","A","S","C","R","I","P","T"],
  	["W","E","B","D","E","S","I","G","N"],
  	["E","D","U","C","A","T","I","O","N"],
  	["C","H","O","C","O","L","A","T","E"],
  	["M","I","A","M","I"]
]

var badAttempts = 0;
//Random number to pick a word
var random = Math.floor((Math.random()*(wordsToPlay.length-1))); 
var wordInCurrentGame = wordsToPlay[random]; // the word to guess will be chosen from the array above

// every letter in the word is symbolized by an underscore in the guessfield
var resultWord = [];
for (var i = 0; i < wordInCurrentGame.length; i++){
	resultWord.push("_");
}

// prints the guessfield
function refreshScreen(){
	var screenLetters = document.getElementById("screenLetters");
	screenLetters.innerHTML = resultWord.toString().replace(/,/g , " ");
}

//checks if the the letter provided by the user matches one or more of the letters in the word
function letterMatches()
{
	var guessInput = document.getElementById("guessedChar"); 
	var guessStr = guessInput.value.toUpperCase(); // the letter provided by the user

	for (var i = 0; i < wordInCurrentGame.length; i++){
		if(wordInCurrentGame[i] === guessStr){
			resultWord[i] = guessStr + " ";
			var charSuccessfullyGuessed = true;
		}
	}

	guessInput.value = "";
	
	//deletes the guessfield and replaces it with the new one
	var screenLetters = document.getElementById("screenLetters");
	screenLetters.innerHTML=""; 
	refreshScreen();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!charSuccessfullyGuessed){

		badAttempts++;

		var wrongSreen = document.getElementById("wrongSreen");
		wrongSreen.innerHTML = "Wrong Letters: "+badAttempts; 

		var hangman = document.getElementById("hangman");
    	hangman.src = "assets/hangman" + badAttempts + ".png";
	}
	
	//checks if all letters have been found
	var won = true;
	for (var i = 0; i < resultWord.length; i++){
		if(resultWord[i] === "_"){
			won = false;
		}
	}
	if(won){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(badAttempts === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

function init(){
	refreshScreen();
}

window.onload = init;

$(document).ready(function() {
	console.log("ready...");

	$.ajax({
	  type: 'GET',
	  datatype: 'json',
	  url: 'https://4geeksacademy.github.io/code-projects/javascript-begginer/hangman/data.json',
	  success: function(resp) {
	  	console.log(resp);
	  },
	  error: function() {

	  }
	});

});