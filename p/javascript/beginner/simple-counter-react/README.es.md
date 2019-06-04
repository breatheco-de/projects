# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Simple Counter with React

React mejora la creación de componentes personalizados, que puedes representar a través de tu aplicación web utilizando el método **ReactDOM.render()**. Un componente personalizado te permite dividir y conquistar, separando los desafíos lógicos y visuales en partes más pequeñas, lo que le brinda un mayor control sobre la pantalla y las funcionalidades de cada parte de la aplicación web.

Por ejemplo, para crear un bootstrap &#x3C;Card /&#x3E; componente codificarías esto:

```
function Card(props){
    render (
        <div className="card">
            <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```

Después de declararlo, puedes **importar** y **utilizar** en tu aplicación web de esta manera:

```
//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card.jsx'

ReactDOM.render(<Card />, document.quertSelector('#root'));
```

Adicionalmente, puedes pasar información a través de **props**:

```html

<!-- Uso del componente personalizado. -->
<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />

```

... para uso dentro del método de renderización de su componente:

```
//Declaration of custom component (Card.jsx)

function Card(props){
    render (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```

# Instrucciones

Crea un componente de contador de segundos, llamado ***SecondsCounter***. Debería verse [como este](https://projects.breatheco.de/json?slug=simple-counter-react&preview).

- El propósito principal del componente es mostrar cuántos segundos han pasado desde que el sitio web terminó de cargarse (onLoad).
- Use el ***ReactDOM.render()*** para representar el componente en la aplicación web.
- Use la función ***setInterval()*** para volver a renderizar el componente cada segundo.
- El componente no necesita un estado local, puede pasar la cantidad de segundos como **props** de la siguiente manera:
```
<SecondsCounter seconds={3434} />

```
- Puede encontrar el ícono del reloj a la izquierda del componente en fuente impresionante.
