(function(classroom,$,undefined) { 

  var intervalHandle,
      projectData,
      secondsRemaining = 0,
      mainMusic = null,
      musicArray = null,
      backupMusicArray = null,
      settings = {},
      currentInstruction = null;
  const ASSETS_URL = 'https://assets.breatheco.de/';
  const CLASS_STEPS_DIRECTORY = "class-steps/";
 
  function resetPage() {
    //show input
    $("#inputArea").show();
    $("#playBtn").show();

    $("#pauseBtn").hide();
    $("#refreshBtn").hide();
    //reset value to blank
    $("#time").html(settings.time);
    $("#minutes").val(settings.minutes);
    $("#music-icon").hide();

    if(musicArray) changeSong();
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

    $("#screen-message").html('');
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

  classroom.initialize = function(theSettings){

    defaults(theSettings);

    loadMusic();

    $("#closeInstructions").click(function() { $('#instructions').hide(); });
    
    $("#loadJSONBtn").click(function() {
      var jsonUrl = $('#json-url').val();
      loadInfoJSON(jsonUrl);
    });

    //pause button
    $("#pauseBtn").click(function() { pauseCountdown(); });
    $("#refreshBtn").click(function() { clearInterval(intervalHandle); resetPage(); });
    $("#playBtn").click(function() {
      if(secondsRemaining===0) startCountdown();
      else resumeCountdown();
    });

    $('body').on('keyup',function(e){
      
      if($('#instruction-area').is(":focus")) return false;
      if(e.target.id=='minutes' || e.target.className=='ql-editor') return false;

      if(e.keyCode == 32){//space bar

        if(secondsRemaining==0) startCountdown();
        else{
          console.log(intervalHandle);
          if (!intervalHandle) resumeCountdown();
          else pauseCountdown();
        }

      }else if(e.keyCode == 38){//up
        var minutes = $("#minutes").val();
        if(isNaN(minutes)) minutes = 0;
        else minutes++;
        $("#minutes").val(minutes);
      }else if(e.keyCode == 40){//down
        var minutes = $("#minutes").val();
        if(isNaN(minutes) || minutes<=1) minutes = 1;
        else minutes--;      
        $("#minutes").val(minutes);
      }else if(e.keyCode == 37){//left
        setInstruction(getInstruction("-1"));
      }else if(e.keyCode == 39){//right
        setInstruction(getInstruction("+1"));
      }

      e.stopPropagation();
      return false;
    });

    resetPage();
  }

  function defaults(theSettings)
  {
    settings = {
      time: "00:00",
      minutes: 1
    };

    if(!theSettings) return settings;
    if(theSettings.time) settings.time = theSettings.time;
    if(theSettings.minutes) settings.minutes = theSettings.minutes;

    return settings;
  }


  /**
   * Plays any sound fx form the library
   * @param  {sting} action the key of the sound fx
   */
  function playFX(action){
    var fxs = musicArray.fx;
    var audioURL = ASSETS_URL+'/sound/';
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
      cache: false,
      dataType: 'json',
      url : ASSETS_URL+'/sound/sounds.php',
      success: function(data){
        if(data.songs)
        {
          backupMusicArray = data;
          musicArray = {
            songs: backupMusicArray.songs.slice(0),//asign a clone of the backup array
            fx: backupMusicArray.fx.slice(0)
          }

          changeSong();
        }
      }
    });
  }

  function changeSong()
  {
      if(mainMusic && !mainMusic.paused){
        mainMusic.pause();
        $(mainMusic).off();
      }

      mainMusic = getRandomSong(); 
      mainMusic.volume = 0.3;
      $("#music-icon").show();

      $(mainMusic).on('ended',function(){
        mainMusic.play();
      });
  }

  function getRandomSong(){
    if(musicArray.songs.length==0)
    {
      musicArray = backupMusicArray.slice(0);
    }
    var nextIndex = Math.floor(Math.random()*musicArray.songs.length);
    var audioURL = ASSETS_URL+'/sound/'+musicArray.songs[nextIndex].url;
    
    $("#music-icon").attr("title",musicArray.songs[nextIndex].name);
    $('#music-icon').tooltip();
    
    musicArray.songs.splice(nextIndex, 1);
    var audio = new Audio(audioURL);
    return audio;
  }

  function getInstruction(index){

    if(!currentInstruction) currentInstruction = 0;
    
    if(typeof(index)!='undefined')
    {
      if(index.indexOf('-')>-1){
        if(typeof(projectData.instructions[currentInstruction-1])!=='undefined') currentInstruction--; 
      }
      else if(index.indexOf('+')>-1){
        if(typeof(projectData.instructions[currentInstruction+1])!=='undefined') currentInstruction++; 
      }
      else{
        if(typeof(projectData.instructions[index])!=='undefined') currentInstruction = index;
      } 

    }

    return currentInstruction;
  }

  function loadInfoJSON(jsonURL){
      $.ajax({
        url: jsonURL,
        cache: false,
        dataType: 'json',
        success: function(data){
          if(!data.instructions || data.instructions.length==0)
          {
            alert('No instructions could be loaded');
          }
          else
          {
            projectData = data;
            setInstruction(getInstruction(),true);

            $("#previous").click(function() {
                setInstruction(getInstruction('-1'));
            });
            $("#next").click(function() {
                setInstruction(getInstruction('+1'));
            });
            $("#save").click(function() {

                projectData.instructions[currentInstruction] = {
                  'minutes_duration': $('#minutes').val()
                };

                saveProjectData(jsonURL);
            });
            $("#add").click(function() {

                projectData.instructions.splice(currentInstruction+1, 0,{
                  'content': 'insert instructions here',
                  'minutes_duration': 1
                });
                setInstruction(getInstruction('+1'));
            });
            $("#delete").click(function() {
                projectData.instructions.splice(currentInstruction, 1);
                setInstruction(getInstruction('+1'));
            });
          }
        },
        error: function(p1, p2,errorString){
          alert("Error saving: "+errorString);
          $('#instructions').css('background','#560000');
        }
      });
  }

  function setInstruction(instructionNumber,force)
  {
    //if its the first time setting the instruction
    if(force)
    {
      $('#instructions').html('<button id="previous" class="btn btn-success"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>');
      $('#instructions').append('<h4 id="main-title">'+projectData.title+' <span id="current-instruction">0</span>/<span id="total-instructions">0</span></h4>');
      $('#instructions').append('<button id="next" class="btn btn-success"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>')
      
      var additionalButtons =  '<div class="right-buttonbar">';
      additionalButtons       +=  '<button id="save" class="btn btn-success"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Save</button>';
      additionalButtons       +=  '<button id="add" class="btn btn-success"><span class="glyphicon glyphicon-plus-sign"></span> Add Step</button>';
      additionalButtons       +=  '<button id="delete" class="btn btn-success"><span class="glyphicon glyphicon-trash"></span> Delete Step</button>';
      additionalButtons     +=  '</div>';
      $('#instructions').append(additionalButtons);
      
      $('#instructions').append('<img class="img-responsive pull-left" src="../app/assets/img/breathe-code-logo-white.png" />')
      $('#instructions').css('background','#003a00');
      $('#instructions').css('color','#FFFFFF');
    }
      
    setInstructionContents(projectData.instructions[instructionNumber].content);
    setInstructionDuration(projectData.instructions[instructionNumber].minutes_duration);
    $('#current-instruction').html(currentInstruction+1);
    $('#total-instructions').html(projectData.instructions.length);

  }

  function setInstructionContents(deltaContent)
  {
    //if its a delta object from the quill library
    if(typeof(deltaContent)=='object')
      quill.setContents(deltaContent);
    else
      quill.setText(deltaContent);
  }

  function setInstructionDuration(duration)
  {
    projectData.minutes_duration = duration;
    $('#minutes').val(duration);
  }

  function saveProjectData(jsonURL){
    $.ajax({
      url: 'app/save.php',
      method: 'post',
      dataType: 'json',
      cache: false,
      data: {url: jsonURL, content: JSON.stringify(projectData)},
      success: function(result){
        if(result.code==200)
        {
          alert('Successfully saved...');
          //replace the querystring with the new info.json path in case the teacher reloads the website
          if (history.pushState) {
              var currentURL = window.location.href;
              if(currentURL.indexOf(CLASS_STEPS_DIRECTORY)===-1)
              {
                var newurl = currentURL.replace("info.json",CLASS_STEPS_DIRECTORY+"info.json");
                window.history.pushState({path:newurl},'',newurl);
              }
          }
        }
        else
        {
          alert('Error saving...');
          console.log(result.msg);
        }
      },
      error: function(){
        alert('Error saving: Conexion Error.');
      }
    });
  }

})( window.classroom = window.classroom || {}, jQuery );
