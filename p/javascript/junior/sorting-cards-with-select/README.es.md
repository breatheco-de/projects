# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Sorting Cards using the selection algorithm

El "algoritmo de selección de selección" es también otro ejemplo simple de cómo funcionan las computadoras al ordenar la lista de cosas. Aquí hay una explicación de 5 minutos sobre cómo funciona el algoritmo de selección:
[https://www.youtube.com/watch?v=g-PGLbMth_g](https://www.youtube.com/watch?v=g-PGLbMth_g)

## Instrucciones

1. Crea una función que genere una lista de cartas al azar.
1. Permita que el usuario especifique cuántas tarjetas aleatorias debe generar el sitio web utilizando una entrada de texto.
2. Agregue un botón de "sorteo" que, al hacer clic, hace que esas tarjetas en el sitio web sean hermosas.
3. Agregue un botón de "clasificación" que ordene las tarjetas usando el algoritmo de clasificación `selection`.
4. Guarde todos los cambios difíciles de realizar al ordenar la lista de tarjetas en una nueva matriz.
5. Muestra el registro completo de cambios uno encima del otro.

This is an example of how your application should look:

![Bubble Sorting Cards on a website](https://projects.breatheco.de/json?slug=sorting-cards-with-select&preview)

Pista:

1. La estrategia primero, nadie comienza a codificar la solución antes de tener una estrategia clara.
2. Apégate a tu estrategia, olvídate del stackoverflow para la estrategia.
3. Divide y conquista, intenta separar el ejercicio en ejercicios más pequeños, por ejemplo:
    - Cree el CSS y HTML codificados antes de intentar que sea dinámico, eso le dará una idea clara de qué código HTML necesita construir con su algoritmo.
    - Primero genere una matriz de tarjetas aleatorias, asegúrese de que se está generando correctamente (utilizando la consola.log) antes de intentar procesarla en el sitio web.
    - Cree una función solo para crear el HTML de UNA tarjeta y luego reutilícela para renderizar todo.