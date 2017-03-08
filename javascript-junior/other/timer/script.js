var intervalHandle;
var secondsRemaining;

function errorHide() {
  document.getElementById("errorMessage").style.display = "none";
 }

function resetPage() {
  //show input
  document.getElementById("inputArea").style.display = "block";
  //hide pause button by default
  document.getElementById("pauseArea").style.display = "none";
  //hide resume button
   document.getElementById("resumeArea").style.display = "none";
  //hide refresh button
  document.getElementById("refresh").style.display = "none";
  //reset value to blank
  document.getElementById("minutes").value = "";
  setTimeout(errorHide, 5000);
}

function resumeCountdown() {
  tick();
  intervalHandle = setInterval(tick, 1000);
   //hide resume button when resuming
  document.getElementById("resumeArea").style.display = "none";
  //show resume button;
  document.getElementById("pauseArea").style.display = "block";
  return;
}

function pauseCountdown() {
  clearInterval(intervalHandle);
  document.getElementById("pauseArea").style.display = "none";
  document.getElementById("resumeArea").style.display = "block";
  return;
}

function tick() {
  var timeDisplay = document.getElementById("time");
  
  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - (min * 60);

  if(sec%10===0)
  {
	playAudio('tic1');
  }
  
  if(min < 10) {
    min = "0" + min;
  }
  
  if(sec < 10) {
    sec = "0" + sec;
  }

  var message = min + ":" + sec;
  timeDisplay.innerHTML = message;
  
  if(secondsRemaining === 0) {
	playAudio('end');
    document.getElementById("errorMessage").innerHTML = "<strong>Times up!</strong>";
    document.getElementById("errorMessage").setAttribute("class","alert alert-success text-center");
    clearInterval(intervalHandle);
    resetPage();
  }
  secondsRemaining--;
}

function startCountdown() {
  var minutes = document.getElementById("minutes").value;

  playAudio('start');
  
   //check if it is a number
  if(isNaN(minutes)||minutes == ""){
      document.getElementById("errorMessage").innerHTML = "Yikes! It's not a number. <strong>TRY AGAIN</strong>";
      document.getElementById("errorMessage").setAttribute("class","alert alert-danger text-center");
       
       //hides error after 5 secs
      setTimeout(errorHide, 5000);
      resetPage();
      return;
  }
  //get the seconds
  secondsRemaining = minutes * 60;
  //reoccuring function
  intervalHandle = setInterval(tick, 1000);
  //hide input form once running
  document.getElementById("inputArea").style.display = "none";
  //show pause when running
  document.getElementById("pauseArea").style.display = "block";
  //show refresh when running
   document.getElementById("refresh").style.display = "block";
}
//refresh page with button
document.getElementById("refresh").onclick = function() {
  clearInterval(intervalHandle);
  document.getElementById("time").innerHTML = "00:00";
  document.getElementById("minutes").value = "";
  document.getElementById("inputArea").style.display = "block";
  document.getElementById("refresh").style.display = "none";
  document.getElementById("resumeArea").style.display = "none";
  document.getElementById("pauseArea").style.display = "none";
}
window.onload = function() {
  //break button
  var startButton = document.getElementById("breakBtn");
  startButton.onclick = function() {
    startCountdown();
  };
  //pause button
  var pauseButton = document.getElementById("pauseBtn");
  pauseButton.onclick = function() {
    pauseCountdown();
  };
 
  //resume button
  var resumeButton = document.getElementById("resumeBtn");
  resumeButton.onclick = function() {
    resumeCountdown();
  };
 document.getElementById("inputArea").appendChild(startButton);
 document.getElementById("pauseArea").appendChild(pauseButton);
 document.getElementById("resumeArea").appendChild(resumeButton);
  
  //hide pause button by default
  document.getElementById("pauseArea").style.display = "none";
  //hide pause button by default
  document.getElementById("resumeArea").style.display = "none";
  //hide refresh by default
  document.getElementById("refresh").style.display = "none";
};

function playAudio(action){
	var audioURL = '';
	switch(action){
		case "pause":
			audioURL = 'sounds/smb_pause.wav';
			break;
		case "end":
			audioURL = 'sounds/smb_gameover.wav';
			break;
		case "start":
			audioURL = 'sounds/smb_warning.wav';
			break;
		case "unpause":
			audioURL = 'sounds/smb_jump-super.wav';
			break;
		case "tic1":
			audioURL = 'sounds/clock-ticking-2.wav';
			break;	
		case "tic2":
			audioURL = 'sounds/clock-ticking-4.wav';
			break;			
	}
	var audio = new Audio(audioURL);
	audio.play();
}