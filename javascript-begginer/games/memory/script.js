var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

function newBoard()
{
	//sort the cards in a random way
    memory_array.sort(function(a, b){return 0.5 - Math.random()});

	var theBoard = document.getElementById('memory_board');
	//reset the board
	theBoard.innerHTML = "";
	
	//start adding all the cards
	for(var i =0; i<memory_array.length;i++)
	{
		//adding each card
		addNewTile(theBoard,"tile_"+i,memory_array[i]);
	}
}

function addNewTile(memoryBoard,elementId,hiddenValue)
{
	var newTile = document.createElement("DIV");
	newTile.addEventListener('click',memoryFlipTile);
	newTile.setAttribute("id", elementId);
	newTile.setAttribute("hiddenValue", hiddenValue);
	memoryBoard.appendChild(newTile);
}

function memoryFlipTile(event)
{
	//event.target will retrive the exact item that was clicked by tue user
	var tile = event.target;

	if(tile.innerHTML == "" && memory_values.length < 2)
	{
		tile.style.background = '#FFF';
		tile.innerHTML = tile.getAttribute("hiddenValue");

		memory_values.push(tile.getAttribute("hiddenValue"));
		memory_tile_ids.push(tile.id);

		console.log(memory_values);

		if((typeof(memory_values[1]) !== 'undefined') && (memory_values[0] == memory_values[1]))
		{
			tiles_flipped += 2;
			// Check to see if the whole board is cleared
			if(tiles_flipped == memory_array.length){
				alert("Congratulations!! You won");
				newBoard();
			}
			//clear both arrays
		    memory_values = [];
		    memory_tile_ids = [];
		} else if(typeof(memory_values[1]) !== 'undefined'){
			function flip2Back(){
			    // Flip the 2 tiles back over
			    var tile_1 = document.getElementById(memory_tile_ids[0]);
			    var tile_2 = document.getElementById(memory_tile_ids[1]);
			    tile_1.style.background = 'none';
        	    tile_1.innerHTML = "";
			    tile_2.style.background = 'none';
        	    tile_2.innerHTML = "";
			    // Clear both arrays

				//clear both arrays
			    memory_values = [];
			    memory_tile_ids = [];
			}
			setTimeout(flip2Back, 700);
		}


	}
}

newBoard();