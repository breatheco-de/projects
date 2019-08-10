# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Traffic Light with React

También es posible crear componentes de reacción utilizando una declaración de clase.

Por ejemplo, para crear un &#x3C;TrafficLight /&#x3E; componente utilizando la declaración de clase puede escribir este código:
```
class TrafficLight extends React.Component{
    constructor(){
        super();
        this.state = {
            //your state properties here
        }
    }
    render(){
        return (
            //return your html here
        )
    }
}
```

El uso de la declaración de clase es excelente porque permite que los componentes tengan un estado que se puede cambiar durante el ciclo de vida del componente o durante el tiempo de ejecución de la aplicación.

# Instrucciones

Simulemos un semáforo [como este](https://projects.breatheco.de/json?slug=traffic-light-react&preview).

La luz tiene que brillar cuando se hace clic.

- Todo el propósito del componente es mostrar un semáforo con luces de lectura, amarillas y verdes.
- Cuando se hace clic (se selecciona) alguna luz, ésta debe brillar, pero las otras luces deben dejar de brillar.
- El componente debe tener un estado que almacene el color actual que debe brillar, por eso debe declarar el componente como una clase (no como una función) de esta manera:
```js
class TrafficLight extends React.Component{
    //Tu constructor y método de renderización aquí.
}
```
- Utilice ReactDOM.render para procesar el componente en el DOM de esta manera
```js
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
```