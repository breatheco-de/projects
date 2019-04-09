# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Random Card Dealer (generator)

En este proyecto, aprenderá cómo cambiar los estilos de su sitio web durante el tiempo de ejecución utilizando [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

## Intrucciones

Cree un algoritmo que genere aleatoriamente una tarjeta en cada actualización:

1. Cada vez que el sitio web actualiza una nueva tarjeta aleatoria debe mostrarse
2. La tarjeta debe tener una de las posibles suites: Corazones, Picas, Clubes y Diamantes.
3. El valor de la tarjeta debe ser uno de los siguientes: 1 a 10, Rey, Reina, Jota o As (sin comodín).

Al final, el proyecto debe ser similar a [esta demostración](https://projects.breatheco.de/json?slug=random-card&preview).

### Pistas 

- Recuerde que el primer evento en el ciclo de vida de un sitio web es [onLoad (su código comienza a ejecutarse allí)](https://www.w3schools.com/jsref/event_onload.asp), debe generar un número aleatorio entre 1 y 4 para elegir un palo y otro número aleatorio entre 0 y 12 para elegir un número de tarjeta.
- Cree una clase general **.card** que aplique los estilos generales a cada tarjeta, y una clase CSS adicional para cada suite: .spade, .club, .heart & .diamond.
- Aplique la clase .card a toda la división, pero solo aplique una de las clases de la suite a la vez, dependiendo de la suite que desee aplicar. Por ejemplo, un 3 de corazones tendrá esta declaración HTML:
```
    <div class='card heart'></div>
```
- Puede usar imágenes, iconos o entidades de caracteres HTML para generar el símbolo de silencio en el HTML [Aquí puede encontrar las entidades de caracteres](https://brajeshwar.github.io/entities/) Para el: antes y después del contenido.

HTML	| Simbolo	| Numérico	| Descripción	                    | Hex	        | CSS (ISO) | JS (Octal)|
--------|-----------|-----------|-----------------------------------|---------------|-----------|-----------|
&loz;	| ◊	        | &#9674;	| lozenge	                        | u+25CA ISOpub	| \25CA	    | \u25ca    |
&spades;| ♠	        | &#9824;	| black spade suit                  | u+2660 ISOpub	| \2660	    | \u2660    |
&clubs;	| ♣	        | &#9827;	| black club suit, a.k.a. shamrock  | u+2663 ISOpub	| \2663	    | \u2663    |
&hearts;| ♥	        | &#9829;	| black heart suit, a.k.a. valentine| u+2665 ISOpub	| \2665	    | \u2665    |
&diams;	| ♣	        | &#9830;	| black diamond suit                | u+2663 ISOpub	| \2666	    | \u2666    |
