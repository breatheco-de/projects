var winner = null;
var turn = "X";

function startGame()
{
	document.querySelector('#modal-container').style.display = "block";
	document.querySelector('#start-over').style.display = "none";
	//Select all the squares and clean them
	var squares = document.getElementsByClassName('square');
	for(var i = 0; i <squares.length; i++){
		squares[i].innerHTML = "";
	}
    

}

function setTurn(turnBtn){
	winner = null;
	turn = turnBtn.innerHTML;
	setMessage(turn + " get's to start.");
	document.querySelector('#modal-container').style.display = "none";
	document.querySelector('#start-over').style.display = "inline";

}

//To save time and reusability I defined this class
function setMessage(msg){ document.querySelector("#message").innerHTML = msg; }

function nextMove(square)
{
	//if there is a winner
	if(winner != null) setMessage(turn + " already won.");

	//else, if the square is empty
	else if(square.innerHTML === '')
	{
		square.className += ' '+turn.toLowerCase()+'-marker';
		square.innerHTML = turn;
		switchTurn();
	}
	//else, the square is occupied
	else
	{
		setMessage("Pick another square.");
	}
}

function switchTurn()
{
	//first, I check if there is a winner
	if(checkForWinner(turn))
	{
		setMessage("Congrats " + turn + ", you won!")
		winner = turn;
	}
	//if not, and X just played, then is O turn
	else if(turn == "X")
	{
		 turn = "O";
		 setMessage("It's " + turn + "'s turn.")
	} 
	//if not, is X turn
	else {
		turn = "X";
		setMessage("It's " + turn + "'s turn.")
	}
}

function checkForWinner(move)
{
  var result = false;

  //all posible combinations for wining on tictactoe
  if(checkRow(1, 2, 3, move) ||
     checkRow(4, 5, 6, move) ||
     checkRow(7, 8, 9, move) ||
     checkRow(1, 4, 7, move) ||
     checkRow(2, 5, 8, move) ||
     checkRow(3, 6, 9, move) ||
     checkRow(1, 5, 9, move) ||
     checkRow(3, 5, 7, move)){
      result = true;
  }

  return result;
}

//Check if the player is on the A,B,C spots all together
function checkRow(a, b, c, move)
{
  var result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
    result =  true;
  }
  return result;
}

//Get the value of that box (if empty, no one has taken that box)
function getBox(number){
 	return document.querySelector("#s" + number).innerHTML;
}

