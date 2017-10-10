(function(videotutorial,$,undefined) { 

  var player,
  	  playerSelector,
  	  menuSelector,
  	  videoStringId,
  	  videoURL,
  	  autoPlay,
      menuTitle,
  	  menuTitleValue,
  	  done = false,
      settings = {};

  const ASSETS_URL = 'https://assets.breatheco.de/';
 
  videotutorial.initialize = function(theSettings){

    defaults(theSettings);

    loadInfoJSON(videoURL);

  }

  function initializePlayer(){
    if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
      window.onYouTubeIframeAPIReady = function() {
        loadPlayer(playerSelector, videoStringId);
      };

      $.getScript('https://www.youtube.com/iframe_api');
    }
  }

  function loadPlayer() {
    player = new YT.Player(playerSelector, {
		height: '100%',
		width: '100%',
		videoId: videoStringId,
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: {
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0
        }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
	   if(autoPlay) player.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      done = true;
    }
  }

  videotutorial.jumpTo = function(seconds) {
	   player.seekTo(seconds, true);
  }

  function defaults(theSettings)
  {
    settings = {
    	'selector': 'player',
    	'autoplay': false,
    	'menu-selector': 'menu-items',
    	'video-url': '',
    	'menu-title': 'Menu'
    };

    if(theSettings['selector']) playerSelector = theSettings['selector'];
    else playerSelector = settings['selector'];

    if(theSettings['menu-selector']) menuSelector = theSettings['menu-selector'];
    else menuSelector = settings['menu-selector'];

    if(theSettings['autoplay']) autoPlay = theSettings['autoplay'];
    else autoPlay = settings['autoplay'];

    if(theSettings['timeline-url']) videoURL = theSettings['timeline-url'];
    else videoURL = settings['timeline-url'];

    if(theSettings['menu-title']) menuTitle = theSettings['menu-title'];
    else menuTitle = settings['menu-title'];
    menuTitleValue = $('#'+menuTitle).html();
    $('#'+menuTitle).html('Loading');

    return settings;
  }

  function renderTimeline(timeline){

  	var cont = 1;
  	timeline.forEach(function(elm){
  		$('#'+menuSelector).append(renderMenuItem(cont,elm.seconds,elm.description));
  		cont++;
  	});

  	addMenuListeners();
  }

  function renderMenuItem(index, seconds, description){
  	return '<li><i>'+displayTime(seconds)+' seg</i> <a class="dr-icon player-topic" data-seconds="'+seconds+'" dr-icon-number" href="#">'+description+'</a></li>';
  }

  function displayTime(seconds) {
    var hh = Math.floor(seconds / 3600);
    var mm = Math.floor((seconds % 3600) / 60);
    var ss = seconds % 60;

    let timeStr = '';
    if(hh==0) timeStr = pad(mm,2) + ":" + pad(ss,2);
    else timeStr = pad(hh,2) + ":" + pad(mm,2) + ":" + pad(ss,2);
    return timeStr;
  }

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  function addMenuListeners(){
  	$('.player-topic').click(function(){
  		videotutorial.jumpTo($(this).data('seconds'));
  	});
  	
  	$('.dr-menu').click(function(){
  	  $(this).toggleClass('dr-menu-open');
  	});
  }

  function loadInfoJSON(jsonURL){
      $.ajax({
        url: '/'+jsonURL,
        cache: false,
        dataType: 'json',
        success: function(data){
          if(!data['video-id'] || data['video-id']==='')
          {
            alert('No timeline could be loaded');
          }
          else
          {
          	$('#'+menuTitle).html(menuTitleValue);
          	if(data.timeline && data.timeline.length>0) renderTimeline(data.timeline);
          	videoStringId = data['video-id'];
          	
          	if(data.menuname) $('#'+menuTitle).html(data.menuname);
            initializePlayer();
          }
        },
        error: function(p1, p2,errorString){
          alert("Error loading the video timeline "+errorString);
        }
      });
	}
})( window.videotutorial = window.videotutorial || {}, jQuery );