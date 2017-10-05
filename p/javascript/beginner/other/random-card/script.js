
window.onload = function(){
  
  var cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  var randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  var randomSuitNumber = Math.floor(Math.random() * suit.length);
  var finalSuit = suit[randomSuitNumber];
  
  document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
  document.getElementById('theCard').className = "";
  document.getElementById('theCard').classList.add("card");
  document.getElementById('theCard').classList.add(getSuiteClass(finalSuit));
  
}

function getSuiteClass(suit)
{
  switch (suit) {
    case "Diamonds": return "suit-diamonds"; break;
    case "Spades": return "suit-spades"; break;
    case "Hearts": return "suit-hearts"; break;
    case "Clubs": return "suit-clubs"; break;
  }
}