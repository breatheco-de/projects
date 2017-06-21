var YouTubeApp = function()
{
    var inside = {};
    
    // After the API loads, call a function to enable the search box.
    inside.init = function() {
        toggleSearchBar();
        var search = document.querySelector('.search');
        search.addEventListener('click',function(){
            toggleSearchBar();
        });
    }
    
    function enterListener(event){
        
        if(event.keyCode==13)
        {
            var q = document.querySelector('.input').value;
            var request = gapi.client.youtube.search.list({
                q: q,
                part: 'snippet',
                type: "video"
            });
            
            request.execute(function(response) {
                renderVideos(response.items);
            });  
        }
    }
    
    function renderVideos(items)
    {
        var videoContainer = document.querySelector('.videos');
        videoContainer.innerHTML = '';
        for(var i = 0;i<items.length;i++)
        {
            videoContainer.innerHTML += generateVideoHTML(items[i]);
        }
    }
    
    function generateVideoHTML(video)
    {
        var content = '';
        content += '<li>';
        content += '  <a href="https://www.youtube.com/watch?v='+video.id.videoId+'">';
        content += '      <img src="'+video.snippet.thumbnails.default.url+'">';
        content += '      <h3>'+video.snippet.title+'</h3>';
        content += '  </a>';
        content += '</li>';
        return content;
    }
    
    function toggleSearchBar(){
        var search = document.querySelector('.search');
        var input = document.querySelector('.input');
        if(search.classList.contains('close'))
        {
            search.classList.remove('close');
            input.classList.remove("square");
            input.removeEventListener('keypress',enterListener);
            input.blur();
            input.placeholder = "";
        }
        else
        {
            input.placeholder = "Type your video search";
            input.classList.add("square");
            input.addEventListener('keypress',enterListener);
            search.classList.add('close');
            input.focus();
        }
    }
    
    return inside;

}