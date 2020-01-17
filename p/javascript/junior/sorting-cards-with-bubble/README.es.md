# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Sorting Cards with Bubble algorithm

La clasificación se considera un concepto importante en muchos lenguajes de programación, ya que nos ayuda a ubicar elementos de una manera más rápida y sencilla.

El algoritmo de clasificación de burbujas es uno de los más fáciles de aprender y ese es el primero que se enseña normalmente. Aquí hay una explicación de 5 minutos sobre cómo funciona el algoritmo de burbuja:
[https://www.youtube.com/watch?v=xli_FI7CuzA](https://www.youtube.com/watch?v=xli_FI7CuzA)

## Instrucciones

1. Crea una función que genere una lista de cartas al azar.
1. Permita que el usuario especifique cuántas tarjetas aleatorias debe generar el sitio web utilizando una entrada de texto.
2. Agregue un botón de "sorteo" que, al hacer clic, hace que esas tarjetas en el sitio web sean hermosas.
3. Agregue un botón de "clasificación" que ordene las tarjetas usando el algoritmo de clasificación `bubble`.
4. Guarde todos los cambios difíciles de realizar al ordenar la lista de tarjetas en una nueva matriz.
5. Muestra el registro completo de cambios uno encima del otro.

Esta es una animación de cómo debería verse su aplicación:
![Bubble Sorting Cards on a website](https://projects.breatheco.de/json?slug=sorting-cards-with-bubble&preview)

Pista:

1. La estrategia primero, nadie comienza a codificar la solución antes de tener una estrategia clara.
2. Apégate a tu estrategia, olvídate del stackoverflow para la estrategia.
3. Divide y conquista, intenta separar el ejercicio en ejercicios más pequeños, por ejemplo:
    - Cree el CSS y HTML codificados antes de intentar que sea dinámico, eso le dará una idea clara de qué código HTML necesita construir con su algoritmo.
    - Primero genere una matriz de tarjetas aleatorias, asegúrese de que se está generando correctamente (utilizando la consola.log) antes de intentar procesarla en el sitio web.
    - Cree una función solo para crear el HTML de UNA tarjeta y luego reutilícela para renderizar todo.