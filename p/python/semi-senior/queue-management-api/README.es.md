# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Sistema de gestión de filas SMS

Permite crear un sistema de filas: el sistema de filas se utiliza en gran medida en las instituciones gubernamentales, aeropuertos, bancos y muchos otros lugares que buscan organizar el tráfico entrante.
Los sistemas de fila también se pueden usar para equilibrar la carga de diferentes aplicaciones como:
- Establecimiento de prioridades en las solicitudes entrantes de servidores web.
- Inmigración y solicitudes de visa que deben ser priorizadas.
- Paquetes de red.
- etc.

## 📝 Instrucciones

1. Clona el siguiente texto para [python/django](https://github.com/breatheco-de/exercise-queue-management-django) y lo siguiente para [python/flask](https://github.com/4GeeksAcademy/flask-rest-hello).
2. La API debe integrarse con Twilio para poder enviar SMS para notificar a los usuarios cuando llegue su turno.
3. Crea una API que permita a los clientes administrar una fila simple, use la siguiente estructura de datos para implementar la fila:

```py
class Queue:

    def __init__(self):
        self._queue = []
        # depending on the _mode, the queue has to behave like a FIFO or LIFO
        self._mode = 'FIFO'

    def enqueue(self, item):
    def dequeue(self):
    def get_queue(self):
    def size(self):
        return len(self._queue)
```

## Ejemplo de Flujo de Trabajo

1. La API recibe una solicitud para agregar a Bob a la fila (`POST / new`) con cualquier prioridad particular (FIFO o LIFO).
2. La API agrega a Bob y le notifica con un SMS de confirmación, el SMS debe indicar cuántas personas están frente a él en la línea.
3. El sistema ahora espera hasta que el endpoint `GET / next` se ejecute para procesar a la persona en la fila.
4. Cada vez que se recibe una solicitud `GET / next`, la siguiente persona en la fila se procesa hasta que sea el turno de Bob.
5. Cuando Bob es procesado, el sistema le envía otro SMS para avisarle que ha llegado su turno y lo elimina de la lista.

## Más Detalles

1. Tu debes crear 3 endpoints para tu API:

- POST `/new`: Recibirá información sobre un usuario y lo agregará a la fila.
- GET `/next`: Se procesará un punto de la fila.
- GET `/all`: Devolverá una lista con todos los que estén pendientes de ser procesados (la fila actual).

## 📖 Fundamentos

Este ejercicio te hará practicar los siguientes fundamentos:

1. Aquí puedes encontrar information sobre [como enviar un sms con twillio](https://www.twilio.com/docs/sms/send-messages), tendrás que registrarse y crear una cuenta (gratis) y también registrar un número (gratis)
4. Construir una RESTful API
5. Estructuras de datos complejas.
6. Queue (FIFO vs FILO)
7. SMS.
