var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suit = ["Diamonds", "Spades", "Hearts", "Clubs"];

function randomCard() {

  var cardNumberLength = cardNumber.length;
  var randomCardNumber = Math.floor(Math.random() * cardNumberLength);
  var suitLength = suit.length;
  var randomSuitNumber = Math.floor(Math.random() * suitLength);
  var finalSuit = suit[randomSuitNumber];

  var pTag = document.getElementById('cardContent');
  var card = document.getElementById('theCard');
  pTag.innerHTML = cardNumber[randomCardNumber];
  card.className = "card";
 
  switch (finalSuit) {
    case "Diamonds":
      card.className = "card suit-diamonds";
      break;
    case "Spades":
      card.className = "card suit-spades";
      break;
    case "Hearts":
      card.className = "card suit-hearts";
      break;
    case "Clubs":
      card.className = "card suit-clubs";
      break;
  }

  return true;
}
