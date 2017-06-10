//Audio Player Class
var AudioPlayer = function () {
  let _playlist = null,
  _audioTag = null,
  _slider = null,
  _this = this,
  _timeline = null,
  _currentSongIndex = 0;
  
  this._getSongHTML = function (index,songData) {
    if (songData) {
        var songHTML = '';
        songHTML += '<div id=song'+index+' class="track" audiourl="'+songData.url+'">';
        songHTML +=     '<div class="track__number">16</div>';
        songHTML +=         '<div class="track__title featured">';
        songHTML +=         '<span class="title">'+songData.name+'</span>';
        songHTML +=         '<span class="feature">Iamnobodi</span>';
        songHTML +=     '</div>';
        songHTML +=     '<div class="track__length">4:11</div>';
        songHTML += '</div>';
        return songHTML;
    }
    return this._$audio;
  };
  
  this._createAutioTag = function(){
    _audioTag      = document.createElement('audio');
    _audioTag.id       = 'audio-player';
    _audioTag.controls = 'controls';
    _audioTag.type     = 'audio/mpeg';
    document.querySelector('body').appendChild(_audioTag);
    
    _audioTag.addEventListener('ended',function(){
        _this._nextSong();
    });
  }
  
    this.toHHMMSS = function (seconds) {
        sec = Math.floor( seconds );    
        min = Math.floor( sec / 60 );
        min = min >= 10 ? min : '0' + min;    
        sec = Math.floor( sec % 60 );
        sec = sec >= 10 ? sec : '0' + sec;    
        return min + ':' + sec;
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds;
    }
  
  this._createTimeline = function(){
      if(_slider) _slider.destroy();
      
       _slider = new Slider("input.slider", {
        	min: 0,
        	max: _audioTag.duration
        });
        
        _slider.on('slideStop',function(newValue){
            _audioTag.currentTime = newValue;
            _slider.setValue(newValue);
        });
  }
  
  this._getListHTML = function () {
    if (this._list == '' || this._list == null) {
      this._list = this._getListHeading();
      for (var i = 0; i < _playlist.length; i++) {
        var currentSong = _playlist[i];
        this._list += this._getSongHTML(i,currentSong);
      }
    }
    return this._list;
  };
  
  this._getListHeading = function(){
    var content = '';
    content +=      '<div class="tracks__heading">';
    content +=          '<div class="tracks__heading__number">#</div>';
    content +=          '<div class="tracks__heading__title">Song</div>';
    content +=          '<div class="tracks__heading__length">';
    content +=              '<i class="ion-ios-stopwatch-outline"></i>';
    content +=          '</div>';
    content +=      '</div>';
    return content;
  }
  
  this._nextSong = function (e) {
    _currentSongIndex++;
    if (_currentSongIndex == _playlist.length) _currentSongIndex = 0;    
    this._loadAudio(document.querySelector('#song'+_currentSongIndex));
  };
  
  this._previousSong = function (e) {
    _currentSongIndex--;
    if (_currentSongIndex < 0) _currentSongIndex = 0;    
    this._loadAudio(document.querySelector('#song'+_currentSongIndex));
  };
  
  this._loadAudio = function (songNode) {
    let audioUrl = songNode.getAttribute('audiourl');
    _audioTag.src = audioUrl;
    _audioTag.addEventListener('canplaythrough',function(){
        document.querySelector('.duration').innerHTML = _this.toHHMMSS(this.duration);
        _this._playAudio();
        _this._createTimeline();
    });
  };
  
  this._playAudio = function () {
    _audioTag.play();
    if(!_timeline) _timeline = setInterval(function(){
        _slider.setValue(_audioTag.currentTime);
        document.querySelector('.current').innerHTML = _this.toHHMMSS(_audioTag.currentTime);
    },1000)
    
    document.querySelector('.play').classList.add('hide');
    document.querySelector('.pause').classList.remove('hide');
  };
  
  this._pauseAudio = function () {
    _audioTag.pause();
    if(_timeline) clearInterval(_timeline);
    document.querySelector('.pause').classList.add('hide');
    document.querySelector('.play').classList.remove('hide');
  };
      
  this.setPlaylist = function (playListSelector,playlist) {
    if(!_audioTag) this._createAutioTag();
    _playlist = playlist;
    document.querySelector(playListSelector).innerHTML = this._getListHTML();
    
    var songNodes = document.querySelectorAll('.track');
    for(var i = 0;i<songNodes.length;i++) 
    {
        var node = songNodes[i];
        node.addEventListener('click',function(event){
           _this._setSongIndex(event.target);
           _this._loadAudio(event.target);
        });
    }
    
    this._setSongIndex = function(songNode)
    {
        for(var i =0; i<_playlist.length;i++)
            if(_playlist[i].url == songNode.getAttribute('audiourl'))
            {
                _currentSongIndex = i;
                return i;
            }
            
        _currentSongIndex = null;
    }
    
    document.querySelector('.play').addEventListener('click',function(){
       _this._playAudio(); 
    });
    
    document.querySelector('.pause').addEventListener('click',function(){
       _this._pauseAudio(); 
    });
    
    document.querySelector('.skipbackward').addEventListener('click',function(){
       _this._previousSong(); 
    });
    
    document.querySelector('.skipforward').addEventListener('click',function(){
       _this._nextSong(); 
    });
  };
  
};