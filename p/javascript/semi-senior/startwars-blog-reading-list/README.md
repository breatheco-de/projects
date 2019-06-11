# Starwars Blog

_La fuerza es fuerte con este ejercicio...._

## Objetivo

Vamos a construir una versión minimalista del [Banco de datos de Star Wars](https://www.starwars.com/databank) con una función React o lista de favoritos.

### Aquí esta un Demo!

<p align="center">
   <img src="https://projects.breatheco.de/json?slug=startwars-blog-reading-list&preview" />
</p>

#### Construyendo la red de personajes y planetas.

- Crear una aplicación web React que enumera _personas_, _vehiculos_ and _planetas_ **entidades** proporcionado por el [SWAPI](https://swapi.co/documentation).

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

#### Construyendo una vista de detalles para el personaje o el planeta

- Cada entidad debe tener una breve descripción (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Importante***: El SWAPI no proporciona las imágenes, puede usar marcadores de posición o evitar las imágenes por completo. El enfoque de este ejercicio es practicar *fetch*, *router* y *context*; puedes enfocarte en el tema del color y el diseño simple para que se vea bien.

***Importante 2***: no se preocupe si los datos que obtiene de la SWAPI no coinciden con los datos que ve en starwars.com.

Usa toda la información provista por el SWAPI (verifique los documentos y / o las respuestas de json).

## Leer más tarde o la funcionalidad de favoritos

Implementa una funcionalidad de lectura posterior, es decir, un botón que permita al usuario "guardar" el elemento (personaje, vehículo o planeta) en una lista especial. Esta lista se mostrará en la parte inferior de la página de inicio, se asemeja a la lista principal, pero solo muestra los elementos "guardados".

#### Uso de Context

Para asegurarse de que el usuario pueda "guardar" el elemento, debe implementar una acción a la que se pueda acceder desde cualquier lugar dentro de la aplicación.

