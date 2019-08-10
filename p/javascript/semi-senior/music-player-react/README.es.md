# Music Player React

Vamos a crear un reproductor de MP3 que funciona de manera similar a Spotify, [aqui esta la demo](https://projects.breatheco.de/json/?slug=music-player-react&preview/).

Los botones siempre deben permanecer en la parte inferior de la ventana gráfica (use la posición fijada para eso).
Solo necesita implementar los botones Reproducir, Pausa, Siguiente y anterior.


## Requerimientos
- Listar las canciones de [esta API](http://assets.breatheco.de/apis/sound/)utilizando la función de fetch.
- Cuando el usuario hace clic en una canción, el jugador debe comenzar a reproducirla.
- Cuando el usuario hace clic en el botón "siguiente", el reproductor debe comenzar a reproducir la siguiente canción de la lista, si no hay una canción siguiente, debe comenzar nuevamente tocando la primera canción de la lista, lo mismo se aplica a la "anterior" botón.
- Use el atributo reaccionar ref para obtener la etiqueta de audio del DOM.
- No hay necesidad de volumen, sin embargo, lo puedes agregar si te sientes con confianza

## Recomendaciones
- Nunca llame a la función setState porque perderá el estado de la etiqueta de audio si se llama a la función de render