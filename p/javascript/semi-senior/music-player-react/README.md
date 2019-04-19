# Music Player React

<p align="center"><img height="300" src="https://projects.breatheco.de/json?slug=music-player-react&preview" /></p>

Let's create a MP3 player that works similar to Spotify, [here is the demo](https://projects.breatheco.de/json?slug=music-player-react&preview).

The buttons should always remain at the bottom of the viewport (use position fixed for that).
You only need to implement the Play, Pause, Next and previous buttons.

## Requierments
- List the songs from [the Sounds API](http://assets.breatheco.de/apis/sound/) using the Fetch API.
- When the user clicks on a song, the player it must start playing it.
- When the user clicks on the "next" button the player should start playing the next song from the list, if there is no next song then it should start over by playing the first song of the list, the same applies for the "previous" button.
- Use the react ref attribute to get the audio tag from the DOM.
- There is not need for volume but you can implement the function if you feel confidente enough.