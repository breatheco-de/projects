# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  The Excuse Generator

Disneyland para procrastinadores y perezosos.

Este proyecto es ideal para evitar que alguien se moleste, no toma más de 20 líneas de código y puede salvarlo por el resto de su vida.

## La Meta

Queríamos un proyecto que usara muy poco Javascript pero aún con una aplicación muy divertida, el generador de excusas toma
20 líneas de código, es super simple de entender y es el primer proyecto perfecto para cualquier desarrollador principiante.

## Instrucciones

Cree un sitio web pequeño que genere una excusa cada vez que se presione un botón (vea la demostración de su mentor acerca de los detalles)

Tiene que verse así: [Echa un vistazo a la animación de demostración.](https://projects.breatheco.de/json?slug=excuse-generator&preview).

## Pista

1. Cree un index.html con una excusa codificada, no js, solo una excusa en HTML puro y simple.
2. La excusa debe estar dentro de una etiqueta HTML que tenga un ID asignado, por ejemplo:
```html
  <p id="excuse">My dog eat my homework</p>
```
3. Usando javascript, cree una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
```js
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
```
4. Para crear una excusa consistente, tiene que concatenar un elemento de cada matriz en el orden correcto.
5. Llame a esa función onLoad y establezca la excusa en el HTML interno del elemento HTML #excuse.


## Tecnologias

HTML, CSS3, Sass, Javascript, Webpack.

## Fundamentos
Este ejercicio cubre los siguientes fundamentos:
1. Usando archivos Javascript externos en tu proyecto.
2. Cómo trabajar con matrices.
3. Generando números al azar.
4. Cuerdas de concatenacion.
5. Usando funciones (al menos un poco).
6. Trabajando con eventos (al menos un poco).
