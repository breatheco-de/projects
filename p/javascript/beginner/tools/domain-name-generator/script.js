  //array with the words
  var pronoun = ['the','our','his'];
  var adj = ['great', 'big', 'amazing' ];
  var noun = ['jogger','racoon','dog', 'merchant', 'driver'];
  
    //creating a sentence (the excuse)
    for(var i = 0; i<pronoun.length;i++)
     for(var j = 0; j<adj.length;j++)
      for(var k = 0; k<noun.length;k++)
       document.querySelector('#domains').innerHTML += '<li>'+pronoun[i] + adj[i] + noun[i]+'.com</li>'; 