# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Segunda parte de la TODO List, agregando fetch

Este ejercicio está destinado a ser completado después de la [aplicación de la TODO List](https://projects.breatheco.de/d/todo-list#readme) porque la primera parte es el boilerplate perfecto para comenzar a usar API's.

Para esta segunda parte, sincronizaremos nuestra lista de tareas con una base de datos real, usando la siguiente [RESTful](http://content.breatheco.de/lesson/understanding-rest-apis) y API pública realizada para este ejercicio.

🔗 Click aquí para acceder a la [documentación de la API del TODO-list ](http://assets.breatheco.de/apis/fake/todos/).

Todo este ejercicio se trata de la programación de asincrona porque las interacciones `from` y` to` del servidor deben realizarse de forma asíncrona. De esa manera, el usuario no tiene que esperar a que llegue la información.

## Instrucciones:

- Haz que tu TODO List se sincronice con la API de backend cada vez que se agregue o elimine una tarea.
- Agregue un botón de limpieza de todas las tareas que eliminará toda la lista del servidor y actualizará la lista vacía en el front-end.

Hay 3 momentos críticos en la línea de tiempo de la aplicación (denominado El tiempo de ejecución) para centrarse en su integración:
- **Después de que la lista se carga vacía por primera vez (componentDidMount)**: debes obtener (GET) los datos de la API y actualizar las tareas cuando la información finalmente llegue.
- **Cuando se agrega una nueva tarea**: debes PONER (PUT) la nueva lista en el servidor.
- **Cuando se elimina una tarea**: Debes PONER (PUT) la nueva lista en el servidor.

## Pista

Utilice la siguiente fetch call para sincronizar tus tareas con el servidor cada vez que haya un cambio en la lista.

```js
fetch('http://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be tru if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
```

Para cualquier otra solicitud, debes seguir cambiando las variables en el fetch:El URL, el método y el payload (carga útil).
