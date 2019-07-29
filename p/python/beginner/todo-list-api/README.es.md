# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) API Lista de Todo

Este proyecto puede considerarse la continuación de la [Aplicación de TodoList con React y Fetch](https://projects.breatheco.de/d/todo-list-with-fetch#readme).
Vamos a replicar/codificar esta api exacta: [http://assets.breatheco.de/apis/fake/todos/](http://assets.breatheco.de/apis/fake/todos/)

## 📝 Instrucciones

Crea una API que se conecte a una base de datos MySQL e implemente los [siguientes endpoints](http://assets.breatheco.de/apis/fake/todos/).

1. `[GET] /todos/user/<username>` Obtener la lista de Todos para un usuario en particular.
2. `[POST] /todos/user/<username>` Crear una nueva lista de Todos de un usuario en particular.
3. `[PUT] /todos/user/<username>` Actualizar la lista completa de tareas de un usuario en particular.
4. `[DELETE] /todos/user/<username>` Eliminar un usuario y todas sus tareas.

## 📖 Fundamentos

Este ejercicio te hará practicar los siguientes fundamentos:

1. Construye una RESTful API.
2. Construye una base de datos con SQLAlchemy.
3. Migraciones de la base de datos.