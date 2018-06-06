# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Making the Prototipe Dynamic

Now that you are aware of Flux it is time to apply it into your project, 
that way you will practice more and more until you master it.

You already the project prototipes in HTML and CSS using Bootstrap.

## Instructions:

Create a centralized MyStore.js and MyActions.js 
and start coding all your user stories using Flux.

## Workflow:

##### 1) Read your entire list of User Stories and prioritize to start working with  the simple ones first.

##### 2) A great way to begin is to hard-code your store state with fake data and doin all the 'getter' function's first so that you views are able to retreive whatever they need.

##### Steps to hard-core the store with fake data and make the getters:

2.1) Initilize the variable in the store constructor:
    
```js
        // this is an example of a fake store ideal for an eCommerce website hard-coded with a bunch of fake products
        class MyStore extends Flux.Store{
            constructor(){
                super();
                this.state = {
                    'products': [
                        // ..a bunch of fake products here...
                        { id: 1, title: 'Amazing T-shirt', color: 'read'},
                        { id: 1, title: 'Amazing T-shirt 2', color: 'blue'},
                        { id: 1, title: 'Amazing T-shirt 3', color: 'green'}
                    ],
                }
            }
        }
```
2.2) Add the getter:
```js
        // this is an example of a fake store ideal for an eCommerce website hard-coded with a bunch of fake products
        class MyStore extends Flux.Store{
            ...
            getProducts(){
                return this.state.products;
            }
            ...
        }
        export default new MyStore();
```

2.3) Now you can change all your views and make them reander the products from the store.

```js
class AnyView extends Flux.View{
    constructor(){
        super();
        //initialize the local state
        this.state = {
            products: []
        }
    }
    ...
    componentDidMount(){
        // you have to re-set the state after the component has been loaded.
        this.setState({
            products: MyStore.getProducts()
        });
    }
    ...
    render(){
        // convert the array of products into an array of <Product> components
        let productsInHTML = this.state.products.map((p) => <Product id={p.id} title={p.title} />));
        
        // render the entire array of <Products>
        return (
            <div>{productsInHTML}</div>
        );
    }
}

```
##### 3. After your views are able to properly render from the store, proceed to code the "add" or "delete" functionalities.

For Example: If you are doing an Online Store (eCommerce) card you can do the 'delete product' and 'add product' first, and leave the edit product for later.

```js
// Let's say we are doind the delete, on the html you have to add the listener to the DOM element that will trigger the delete
<button onClick={() => MyActions.deleteProduct(productId)}>delete product</button>

// On MyActions.js you have to add the deleteProduct function
class MyActions extends Flux.Action{
    deleteProduct(productId){
        //delete your product here
        
        //and dispatch later
        this.dispatch('MyStore.setProducts', arrayWithProducts);
    }
}
```
Note: For each user story in your project it is probable that you will have to create a function instide MyActions.js

##### 4. Finish by binding the views with the stores to listen to the store changes.
