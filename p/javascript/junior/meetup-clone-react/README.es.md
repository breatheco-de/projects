# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Contact Managment Application 

Tecnologias: HTML, CSS, JS, React, React Router and React Context API.

¡Hola! Es hora de empezar a hacer aplicaciones frontales profesionales. Esta vez
Crearemos una pequeña aplicación de Meetup.com que permita a los usuarios navegar y confirmar eventos, muy similar a cómo funciona Meetup.com.

**Event**s  son la entidad central en el sistema, la vista principal (Home) tendrá una lista de **Event**s organizado por fechas.
Cada **Event** esta vinculado _a single **Meetup**_.
Un **Meetup** puede ser vinculado _one or more_ **Event**s.

_Optimizado para grupos de 2-3 estudiantes._

## Este proyecto está destinado a realizarse en dos fases.

Primero queremos enfocarnos en las imágenes, asegurarnos de que las estructuras visibles estén funcionando correctamente.
En segundo lugar, debemos implementar la visualización dinámica de datos.

### Fase 1: Crea las vistas, luego vincúlalas con React Router en su componente de diseño.

Cada grupo debe crear los proyectos ***ver componentes***: 
- Home (Lista de Eventos)
- Detalle del Event
- Detalle del Meetup

Usa contenido ficticio inicialmente.

En Meetup.com, Meetups son los grupos u organizaciones anfitrionas de los eventos. 

##### Cada Meetup debe tener:
- Titulo
- Descripción


En contraste, los eventos son los eventos específicos que el grupo está organizando durante el mes. 

##### Cada Evento debe tener:
- Titulo
- Descripción
- Fecha
- Hora
- Meetup



Nota: Piensa en DRY (Don't repeat yourself) y declara solo ***un*** componente y usa ```props``` para manejar una estructura similar pero contenido diferente.

RECUERDA: Las etiquetas de anclaje provocarán un redireccionamiento, que no deseas en React. Asegúrate de usar el componente ``` Link ``` de React Router para implementar la navegación entre vistas.

```jsx
...

<Link to="/event">
	Title of event
</Link>

...
```


### Fase 2: dinamizar la aplicación implementando React Context.

***Utiliza el store para rellenar el contenido ficticio *** dentro de las vistas/componentes. Se puede acceder a el store utilizando el ```Context.Consumer```

##### Referencia: Usando el Context

The `store` structure (```/store/store.js```):

Algunos contenidos ficticios.

```javascript
store = {
    events:[
        {
            ID: 36,
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
            post_title: "Lorem Event",
            meta_keys: {
                day: "20180428",
                time: "07:00:00",
                _meetup: "9",
                _rsvpNo: [
                    "robert",
                    "jjtime",
                    "username2"
                ],
                _rsvpYes: {
                    "cheeselover",
                    "neweradude",
                    "james1996"
                }
            }
        },
        ...
    ],
    meetups:[
        {
            ID: 9,
            post_content: "The nicest Meetup ever",
            post_title: "Tech Enthusiasts",
        },
        ...
    ],
    session:{
        ID: 2,
        username: "theUser",
        password: "1234",
        token: "qwerty12345asdfgzxcv"
    }
    ]
};
```

Para tener acceso a los datos globales, debe importar el contexto:
```jsx

import {Context} from '/path/to/store/appContext.jsx';

...

//Then use the Consumer within the render method
    render(){
        return(
            <Context.Consumer>
                {
                    ({store}) => {
                        //Then you can use the data structure within store into 
                        return (<span> hello, {store.events[0].post_title} </span>);
                        
                    }
                }
            </Context.Consumer>
        );
    }
...

```

Todo tu Fetch/AJAX estará en la sección ```componentDidMount()``` del archivo appContext.jsx.

### ¿Como empezar?

Comienza con el boilerplate (plantilla) de React.

## Pasos para instalar el boilerplate

Nota: breathecode-cli usa nvm 8:

```$ nvm install 8```

```$ nvm use 8```

##### 0. Asegúrate de tener instalado el breathecode-cli en tu entorno. [Instrucciones detalladas](https://www.npmjs.com/package/@breathecode/breathecode-cli)
```
$ npm install -g breathecode-cli
````

##### 1. Comienza con boilerplate de React
```
$ breathecode start:react-project
```
##### 2. Instala el /node_modules
```
$ npm install
```
##### 3. Ejecutar el servidor de desarrollo webpack.
```
$ npm run c9
```

¡Eso es! Tiempo para codificar.

_"El momento más espantoso es siempre antes de empezar."_

-_Stephen King_

