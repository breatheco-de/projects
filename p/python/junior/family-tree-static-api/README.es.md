# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) API estática del árbol genealógico

Basado en las tecnologías/estrategias que hemos aprendido, construye una API estática que maneje un árbol familiar. Tu eres libre de usar tu propia información familiar, también puedes usar datos falsos.

## Requerimientos

Su API debe tener, al menos, 7 miembros distribuidos en 3 generaciones:

**abuelos -> padres -> generación actual**

El árbol genealógico debe representarse como un árbol de objetos estructurados, es decir: cada persona (nodo en el árbol) debe tener: id, nombre, apellido, edad y una referencia (id) a sus padres e hijos (si corresponde).

La API debe exponer un endpoint que devuelva la lista completa de miembros de la familia ordenados por mayor a menor.

La API debe exponer un endpoint que devuelve a un miembro específico del árbol familiar por su id (que debe ser único) y la información sobre sus hijos y padres.

### tecnologías

La API se debe desarrollar utilizando **Flask** y cada punto final debe devolver un archivo *válido* **JSON**.

### Pista

Es posible que desees dibujar (lápiz y papel) la estructura de árbol para tener una estructura "visual" en mente. Usa las líneas para mostrar las referencias entre padres e hijos.

Las referencias deben ser el número de identificación de los miembros.

Crea tus estructuras de datos antes de crear los puntos finales, use variables globales.
