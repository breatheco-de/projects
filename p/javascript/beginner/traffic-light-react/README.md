# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Traffic Light with React

It is possible also to create react components using a class declaration.

For example, to create a &#x3C;TrafficLight /&#x3E; component using class declaration you can write this code:
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

Using class declaration is great beacuse it allows the components to have a state that can be changed during the component lifecycle or during the application runtime.

# Instructions

Let's simulate a traffic light [like this one](https://projects.breatheco.de/json?slug=traffic-light-react&preview).

The light has to glow when clicked.

- The whole purpose of the component is displaying a traffic light with read, yellow and green lights.
- When any light is clicked (selected) it has to glow, but the other lights have to stop glowing.
- The component must have a state that stores the current color that should be glowing, that is why you need to declare the component as a class (not as a function) like this:
```js
class TrafficLight extends React.Component{
    //your constructor and render method here
}
```
- Use the ReactDOM.render to render the component into the DOM like this
```js
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
```