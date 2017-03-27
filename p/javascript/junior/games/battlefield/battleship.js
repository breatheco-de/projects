// set grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// get the container element
var gameBoardContainer = document.getElementById("gameboard");

function addBox(x,y,className = null)
{
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");

	    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + y + x;			
		
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = y * squareSize;
		var leftPosition = x * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';	

		return square;
}


function addGuides(axe, size)
{

	for (i = 0; i < size; i++)
	{
		// create a new div HTML element for each grid square and make it the right size
		var guide = document.createElement("div");

		// set each grid square's coordinates: multiples of the current row or column number
		var coord = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		if(axe == "y") 
		{
			guide.style.width = squareSize/2 + 'px';
			guide.style.top = coord + 'px';
			guide.style.left = '-'+(squareSize/2)+'px';	
		}
		else if(axe == "x")
		{
			guide.style.height = squareSize/2 + 'px';
			guide.style.top = '-'+(squareSize/2)+'px';	
			guide.style.left = coord + 'px';	
		}

		guide.style.background = 'white';
		guide.className = 'guides';
		guide.innerHTML = ''+i+'';
		gameBoardContainer.appendChild(guide);

	}
}

// make the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		var square = addBox(i,j);
		gameBoardContainer.appendChild(square);					
	}
}
addGuides("y",10);
addGuides("x",10);

/* lazy way of tracking when the game is won: just increment hitCount on every hit
   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
   there are 17 hits to be made in order to win the game:
      Carrier     - 5 hits
      Battleship  - 4 hits
      Destroyer   - 3 hits
      Submarine   - 3 hits
      Patrol Boat - 2 hits
*/
var hitCount = 0;

/* create the 2d array that will contain the status of each square on the board
   and place ships on the board (later, create function for random placement!)

   0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
*/
var gameBoard = [
				[1,1,1,1,1,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,0,0,0,0,0,0]
				]



//console.log(gameBoard);

// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener("click", fireTorpedoListener, false);

// initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function fireTorpedoListener(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	if ((e.target !== e.currentTarget) && (e.target.tagName == 'DIV')) {
        // extract row and column # from the HTML element's id
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
        //alert("Clicked on row " + row + ", col " + col);
        fireTorpedo(col,row);
    }
    e.stopPropagation();
}

function fireTorpedo(col,row)
{		
	// if player clicks a square with no ship, change the color and change square's value
	if (gameBoard[row][col] == 0) {
		var targetDiv = document.getElementById('s'+row+col);
		targetDiv.style.background = 'gray';
		// set this square's value to 3 to indicate that they fired and missed
		gameBoard[row][col] = 3;
		
	// if player clicks a square with a ship, change the color and change square's value
	} else if (gameBoard[row][col] == 1) {
		var targetDiv = document.getElementById('s'+row+col);
		targetDiv.style.background = 'red';
		// set this square's value to 2 to indicate the ship has been hit
		gameBoard[row][col] = 2;
		
		// increment hitCount each time a ship is hit
		hitCount++;
		// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
		if (hitCount == 17) {
			alert("All enemy battleships have been defeated! You win!");
		}
		
	// if player clicks a square that's been previously hit, let them know
	} else if (gameBoard[row][col] > 1) {
		alert("Stop wasting your torpedos! You already fired at this location.");
	}		
}

function addShip(gameBoard, shipSize, initialPosition, orientation)
{
	var posX = initialPosition[0];
	var posY = initialPosition[1];

	if(orientation=="horizontal")
		for(var init = posX; init<(posX+shipSize); init++)
		{
			gameBoard[posY][init] = 1;
		}

	if(orientation=="vertical")
		for(var init = posY; init<(posY+shipSize); init++)
			gameBoard[init][posX] = 1;

		//console.log(gameBoard);
	return gameBoard;

}
