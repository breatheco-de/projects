var excuse = function(){
  //array with the words
  var first = 'A ';
  var adj = ['two headed ', 'nuclear ', 'angry ', 'lonely ','crazy ','glowing ','smelly ','slow ','old ' ];
  var noun = ['jogger ','racoon ','dog ', 'merchant ', 'driver ', 'comedian ', 'pinecone '];
  var action = ['took my ', 'threw my ', 'yelled at my ' , 'kicked my ', 'stole my ', 'burned my ', 'bit my ', 'hit my '];
  var possetion = ['toe ', 'car ', 'watch ', 'shoe ', 'wallet ', 'shirt ', 'keys ', 'computer ', 'phone ', 'sandwich '];
  var where = ['on the street','in my house','in my driveway', 'in front of the office', 'near the mall', 'near the toilet', 'at the bus station'];
  
  // declaring random variables
   var rdm1 = Math.floor((Math.random() * adj.length) );
   var rdm2 = Math.floor((Math.random() * noun.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    //creating a sentence (the excuse)
    document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
  
}