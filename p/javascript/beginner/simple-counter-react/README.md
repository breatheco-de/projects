# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Simple Counter with React

AS you may already heard, React let's you create your own components and render them inside your website using the **ReactDOM.render()** the method.

For example, to create a bootstrap &#x3C;Card /&#x3E; component you can write this code:
```
function Card(props){
    render (
        <div className="card">
            <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```
And then.. you are able to include it in your website like this:
```
//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<Card />, document.quertSelector('#root'));
```
Finally, you can pass information to the component as a prop by doing this:
```html
<Card imageUrl="http://via.placeholder.com/350x150" />
```
And then using it inside the render method of your component like this:
```html
function Card(props){
    render (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```

# Instructions

Let's do a secons counter component called ***SecondCounter*** in React.js that looks [like this one](https://projects.breatheco.de/json?slug=simple-counter-react&preview).

- The whole purpose of the component is displaying how many seconds have passed since the website finished loading.
- Use the ReactDOM.render to render the component into the store.
- Use the setInterval function to render de component into the DOM on every second.
- The component does not need a local state, you can pass the number of seconds as a property like this:
```
<SecondCounter seconds={3434} />
```
- The clock icon on the left of the component you can find it on font-awesome.