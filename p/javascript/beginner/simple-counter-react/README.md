# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Simple Counter with React

React improves the creation of custom components, which you can render throughout your webapp using the **ReactDOM.render()** method. A custom component allows you to divide an conquer, separating logical and visual challenges into smaller pieces giving you greater control over the display and functionalities of each part of the webapp.

For example, to create a bootstrap &#x3C;Card /&#x3E; component you'd code this:

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

After declaring it, you are able to **import** and **use** it in your webapp like this:

```
//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card.jsx'

ReactDOM.render(<Card />, document.quertSelector('#root'));
```

Aditionally, you can pass information through **props**:

```html

<!-- Use of the custom component -->
<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />

```

... for usage within the render method of your component:

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

# Instructions

Create a seconds-counter component, called ***SecondsCounter***. It should look [like this one](https://projects.breatheco.de/json?slug=simple-counter-react&preview).

- The whole purpose of the component is to display how many seconds have passed since the website finished loading (onLoad).
- Use the ***ReactDOM.render()*** to render the component into the webapp.
- Use the ***setInterval()*** function to re-render de component on every second.
- The component does not need a local state, you can pass the number of seconds as **props** like this:
```
<SecondsCounter seconds={3434} />

```
- You can find the clock icon on the left of the component in font-awesome.
