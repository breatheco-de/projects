
//The cards will be represented as follows: C=clubs, D=diamonds, H=hearts, S=spades
var suit = "CDHS";

//This are all the possible numbers a card can have
var run = "A234567890JQK";

//All decks of cards have one card of each kind
var cards = [];
for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < run.length; j++) {
        cards.push(run[j] + suit[i]);
    }
}

/*
* My function shuffle will rearange all the cards in a random order.
*/
function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function build() {
    var deck = [];
    var T = suit.length*run.length;
    for (var i = 0; i < T; i++) {
        deck.push(i);
    }
    shuffleArray(deck);

    var cardsOutput = document.getElementById('cardsOutput');
    cardsOutput.innerHTML = "";

    for (i = 0; i < T; i++) {
        var nexCard = cards[deck[i]];
        var cardNode = document.createElement("DIV");
        cardNode.className = 'card';
        cardNode.setAttribute('data-suit', nexCard[1]);
        var n = nexCard[0];
        if (n === '0') {
            n = 10;
        }
        cardNode.innerHTML = n;
        cardsOutput.appendChild(cardNode);
    }
}

build();
