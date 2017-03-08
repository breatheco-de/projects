var intervalHandle;
var secondsRemaining = 0;
var mainMusic = null;
var songsArray = [];

var currentInstruction = null;
var instructionsArray = [];

function resetPage() {
  //show input
  $("#inputArea").show();
  $("#playBtn").show();

  $("#pauseBtn").hide();
  $("#refreshBtn").hide();
  //reset value to blank
  $("#time").html("00:00");
  $("#minutes").val(1);

  if(mainMusic && !mainMusic.paused) mainMusic.pause();
  intervalHandle = false;
}

function resumeCountdown() {
  tick();
  intervalHandle = setInterval(tick, 1000);

  $("#playBtn").hide();
  $("#refreshBtn").hide();
  $("#pauseBtn").show();

  mainMusic.play();
  return;
}

function pauseCountdown() {
  clearInterval(intervalHandle);
  intervalHandle = false;
  $("#playBtn").show();
  $("#pauseBtn").hide();
  $("#refreshBtn").show();
  mainMusic.pause();
  return;
}

function tick() {
  
  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - (min * 60);

  if(sec%10===0)
  {
	   playFX('tictac');
  }
  
  if(min < 10) {
    min = "0" + min;
  }
  
  if(sec < 10) {
    sec = "0" + sec;
  }

  var message = min + ":" + sec;
  $("#time").html(message);
  
  if(secondsRemaining === 0) {
	  playFX('end');
    $("#screen-message").html("<strong>Times up!</strong>");
    clearInterval(intervalHandle);
    resetPage();
  }
  else secondsRemaining--;
}

function startCountdown() {
  var minutes = $("#minutes").val();
  if(isNaN(minutes)||minutes == ""){
      alert("Yikes! It's not a number. Try Again!");
      resetPage();
      return;
  }
  console.log('Starting countdown...');

  playFX('start');
  //code before the pause
  setTimeout(function(){
    //do what you need here
    mainMusic.play();
  }, 3000);
   //check if it is a number
  //get the seconds
  secondsRemaining = minutes * 60;
  //reoccuring function
  intervalHandle = setInterval(tick, 1000);
  //hide input form once running
  $("#playBtn").hide();
  $("#pauseBtn").show();
  $("#refreshBtn").hide();
}

$(document).ready(function() {
  
  loadMusic();
  $("#closeInstructions").click(function() { $('#instructions').hide(); });
  $("#loadJSONBtn").click(function() {
    var jsonUrl = $('json-url').val();
    $.ajax({
      url: jsonUrl,
      success: function(data){
        instructionsArray = data;
        loadInstruction();
      },
      error: function(pq, errorString){
        alert(errorString);
      }
    });
  });

  //pause button
  $("#pauseBtn").click(function() { pauseCountdown(); });
  $("#refreshBtn").click(function() { clearInterval(intervalHandle); resetPage(); });
  $("#playBtn").click(function() {
    if(secondsRemaining===0) startCountdown();
    else resumeCountdown();
  });

  $('body').on('keyup',function(e){
    if(e.keyCode == 32){//space bar
      if(secondsRemaining==0) startCountdown();
      else{
        console.log(intervalHandle);
        if (!intervalHandle) resumeCountdown();
        else pauseCountdown();
      }
    }else if(e.keyCode == 38){//space bar
      var minutes = $("#minutes").val();
      if(isNaN(minutes)) minutes = 0;
      else minutes++;
      $("#minutes").val(minutes);
    }else if(e.keyCode == 40){//space bar
      var minutes = $("#minutes").val();
      if(isNaN(minutes) || minutes<=1) minutes = 1;
      else minutes--;      
      $("#minutes").val(minutes);
    }
  });

  resetPage();

});

function playFX(action){
	var fxs = musicArray.fx;
  var audioURL = 'https://4geeksacademy.github.io/exercise-assets/sound/';
	switch(action){
		case "pause":
      audioURL += fxs[3].url;//pause
      break;
    case "end":
      audioURL += fxs[0].url;//gameover
      break;
    case "start":
      audioURL += fxs[5].url;//warning
      break;
    case "unpause":
      audioURL += fxs[1].url;//jump super
      break;
    case "tictac":
      audioURL += fxs[10].url;
      break;  
	}
	var audio = new Audio(audioURL);
	audio.play();
}

function loadMusic()
{
  $.ajax({
    url : 'https://4geeksacademy.github.io/exercise-assets/sound/randomizer.json',
    success: function(data){
      if(data.songs)
      {
        musicArray = data;
        mainMusic = getRandomSong();        
        mainMusic.volume = 0.3;
        $(mainMusic).on('ended',function(){
          mainMusic.play();
        });
      }
    }
  });
}

function getRandomSong(){
  var audioURL = 'https://4geeksacademy.github.io/exercise-assets/sound/'+musicArray.songs[Math.floor(Math.random()*musicArray.songs.length)].url;
  var audio = new Audio(audioURL);
  return audio;
}

function loadInstruction(index){
  if(!currentInstruction) currentInstruction = 0;
  else currentInstruction++;
  if(typeof(index)!='undefined') currentInstruction = index;
  $('#instruction-area').val(instructionsArray[currentInstruction]);
}