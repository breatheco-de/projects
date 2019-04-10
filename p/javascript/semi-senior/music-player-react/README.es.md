# Music Player React

Let's create a MP3 player that works similar to Spotify, [here is the demo](https://projects.breatheco.de/json/?slug=music-player-react&preview/).

The buttons should always remain at the bottom of the viewport (use position fixed for that).
You only need to implement the Play, Pause, Next and previous buttons.


## Requierments
- List the songs from [this API](http://assets.breatheco.de/apis/sound/) using the fetch function.
- When the user clicks on a song, the player it must start playing it.
- When the user clicks on the "next" button the player should start playing the next song from the list, if there is no next song then it should start over by playing the first song of the list, the same applies for the "previous" button.
- Use the react ref attribute to get the audio tag from the DOM.
- There is not need for volume

## Recomendations
- Never call the setState function because you will loose the audio tag state if the render function gets called.