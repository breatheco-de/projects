# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Making the Prototipe Dynamic

Ahora que está al tanto de Flux, es hora de aplicarlo en su proyecto, de esa manera practicará más y más hasta que lo domine.

Ya tienes los prototipos de proyecto en HTML y CSS usando Bootstrap.

## Instrucciones:

Cree un MyStore.js y MyActions.js centralizados y comience a codificar todas sus historias de usuario utilizando Flux.

## Flujo de trabajo:

##### 1) Lea su lista completa de Historias de usuarios y establezca prioridades para comenzar a trabajar con las simples primero.

##### 2) Una excelente manera de comenzar es codificar el estado de su tienda con datos falsos y hacer la primera función 'getter' para que sus vistas puedan recuperar lo que necesiten.

##### Pasos para endurecer la tienda con datos falsos y hacer que los captadores:

2.1) Inicialice la variable en el constructor de tienda:
    
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
2.2) Añadir el getter:
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

2.3) Ahora puede cambiar todas sus vistas y hacer que reanuden los productos de la tienda.

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
##### 3. Una vez que sus vistas sean capaces de representar correctamente desde la tienda, proceda a codificar las funcionalidades "agregar" o "eliminar".

Por ejemplo: si está haciendo una tarjeta de la tienda en línea (comercio electrónico), puede hacer primero 'eliminar producto' y 'agregar producto', y dejar el producto de edición para más adelante.

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
Nota: Para cada historia de usuario en su proyecto, es probable que tenga que crear una función en MyActions.js

##### 4. Finalice enlazando las vistas con las tiendas para escuchar los cambios de la tienda.
