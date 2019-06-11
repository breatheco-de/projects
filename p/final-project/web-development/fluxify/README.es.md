# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Haciendo el Prototipe Dinámico

Ahora que conoces Flux, es el momento de aplicarlo en tu proyecto.
De esa manera practicarás más y más hasta que lo domines.

Ya tienes los prototipos de proyecto en HTML y CSS usando Bootstrap.

## Instrucciones:

Crea un MyStore.js centralizado y MyActions.js
y comienza a codificar todas tus historias de usuario utilizando Flux.

## Flujo de Trabajo:

##### 1) Lea su lista completa de Historias de usuarios y establezca prioridades para comenzar a trabajar con las simples primero.

##### 2) Una excelente manera de comenzar es codificar el estado de su tienda con datos falsos y hacer la primera función 'getter' para que sus vistas puedan recuperar lo que necesiten.

##### Pasos para codificar el store con data falsa y crear getter:

2.1) Inicializa la variable en el store del constructor:

```js
        // Este es un ejemplo de una tienda falsa ideal para un sitio web de comercio electrónico codificado con un montón de productos falsos.
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
2.2) Agrega el getter:
```js
        // Este es un ejemplo de una tienda falsa ideal para un sitio web de comercio electrónico codificado con un montón de productos falsos.
        class MyStore extends Flux.Store{
            ...
            getProducts(){
                return this.state.products;
            }
            ...
        }
        export default new MyStore();
```

2.3) Ahora puedes cambiar todas tus vistas y hacer que reanuden los productos del store.

```js
class AnyView extends Flux.View{
    constructor(){
        super();
        //inicializa el local state
        this.state = {
            products: []
        }
    }
    ...
    componentDidMount(){
        // debes restablecer el state después de que se haya cargado el componente.
        this.setState({
            products: MyStore.getProducts()
        });
    }
    ...
    render(){
        // convertir el arreglo de productos en un arreglo de componentes <Producto>
        let productsInHTML = this.state.products.map((p) => <Product id={p.id} title={p.title} />));

        // renderizar todo el arreglo de <Products>
        return (
            <div>{productsInHTML}</div>
        );
    }
}

```
##### 3. Una vez que tus vistas sean capaces de presentarse correctamente desde el store, procede a codificar las funcionalidades "agregar" o "eliminar".

Por ejemplo: si estás haciendo un card de un Ecomerce (comercio electrónico), puedes hacer primero 'eliminar producto' y 'agregar producto', y dejar el producto de edición para más adelante.

```js
// Digamos que estamos haciendo la eliminación, en el html tiene que agregar el listener al elemento DOM que activará la eliminación
<button onClick={() => MyActions.deleteProduct(productId)}>delete product</button>

// En MyActions.js tiene que agregar la función deleteProduct
class MyActions extends Flux.Action{
    deleteProduct(productId){
        //elimina tu producto aqui

        //and dispatch later
        this.dispatch('MyStore.setProducts', arrayWithProducts);
    }
}
```
Nota: Para cada historia de usuario en tu proyecto, es probable que tengas que crear una función en MyActions.js

##### 4. Finalice enlazando las vistas con el store para detectar los cambios del store.
