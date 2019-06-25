# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Lista de Contacto con REST API en Flask

Crear y mantener las API REST es EL trabajo diario para la mayoría de los desarrolladores backend, por lo que es una habilidad que necesitamos para madurar. En este proyecto practicaremos cada paso del proceso de desarrollo de API.

Vamos a construir la API que gestiona una base de datos de contactos y expondrá públicamente los endpoints para que las aplicaciones del cliente (incluida la nuestra) puedan usarla. Esta vez incluiremos *Groups*, una nueva entidad que permitirá al sistema agrupar *Contacts*. Ejemplo: Trabajo, Familia, Amigos. **Sugerencia**: podemos implementar esta lógica utilizando una relación *many-to-many* entre las dos tablas.

## 📝 Instrucciones

Crea una API con los siguientes endpoints:

1. Obtenga una lista de todos los contactos `GET /contact/all`
2. Crear un nuevo Contacto `POST /contact`
3. Obtener un Contacto específico (con los objetos del grupo al que pertenece) `GET /contact/{contact_id}`
4. Eliminar un Contacto `DELETE /contact/{contact_id}`
5. Actualiza el Contacto `UPDATE /contact/{contact_id}`
6. Obtener una lista de todos los nombres e IDs del grupo `GET /group/all`
7. Crea un nuevo Grupo `POST /group`
8. Obtener un grupo específico (con todos los objetos de contacto relacionados con él) `GET /group/{group_id}`
9. Actualizar el nombre de grupo `UPDATE /group/{group_id}`
10. Elimina un Grupo `DELETE /group/{group_id}`

Un contacto debe tener la siguiente estructura de datos en la base de datos:
```python
# Contact
    id: (int, primary_key)
    full_name: (string, mandatory)
    email: (string, mandatory)
    address: (string, optional)
    phone: (string, optional)
    groups: (list of foreign_key)

# Group
    id: (int, primary_key)
    name: (string, mandatory)
    contacts: (list of foreign_key)
```

## Documentación formal DE API

1. GET /contact/all
```
    REQUEST (application/json)
        type: GET
        body: null
    RESPONSE (application/json)
        code: 200 | 404 | 500
        body: [
            {
                "full_name": "Dave Bradley",
                "email": "dave@gmail.com",
                "address":"47568 NW 34ST, 33434 FL, USA",
                "phone":"7864445566",
                "groups": [2,3]
            },
            ...
        ]
```
2. Crear un nuevo contacto
```
    REQUEST (application/json)
        type: POST
        path: /contact
        body: {
            "full_name": "Dave Bradley",
            "email": "dave@gmail.com",
            "address":"47568 NW 34ST, 33434 FL, USA",
            "phone":"7864445566",
            "groups": [2,3]
        }
    RESPONSE (application/json)
        code: 200 | 400 | 500
        body: {
            "id": 12
            "full_name": "Dave Bradley",
            "email": "dave@gmail.com",
            "address":"47568 NW 34ST, 33434 FL, USA",
            "phone":"7864445566",
            "groups": [2,3]
        }
```
3. Obtener un contacto específico
```
    REQUEST (application/json)
        type: GET
        path: /contact/{contact_id}
    RESPONSE (application/json)
        code: 200 | 404 | 400 | 500
        body:{
            "id": 12
            "full_name": "Dave Bradley",
            "email": "dave@gmail.com",
            "address":"47568 NW 34ST, 33434 FL, USA",
            "phone":"7864445566",
            "groups": [
                {
                    "id": 2,
                    "name": "Family"
                },{
                    "id": 3,
                    "name": "Gamers"
                }
             ]
        }
```
4. Actualizar un contacto dado
```
    REQUEST (application/json)
        type: PUT
        path: /contact/{contact_id}
        body: {
            "full_name": "Dave Bradley",
            "email": "dave@gmail.com",
            "address":"47568 NW 34ST, 33434 FL, USA",
            "phone":"7864445566",
            "groups": [2,3]
        }
    RESPONSE (application/json)
        code: 200 | 404 | 400 | 500
        body:{
            "id": 12
            "full_name": "Dave Bradley",
            "email": "dave@gmail.com",
            "address":"47568 NW 34ST, 33434 FL, USA",
            "phone":"7864445566",
            "groups": [2,3]
        }
```
5. Eliminar un contacto por id
```
    REQUEST (application/json)
        type: DELETE
        path: /contact/{contact_id}
        body: null
    RESPONSE (application/json)
        code: 200 | 404 | 500
        body: {
            "deleted": {
                "id": 12,
                "full_name": "Dave Bradley",
            }
        }
```
6. Listar todos los grupos
```
    REQUEST (application/json)
        type: GET
        path: /group/
        body: null
    RESPONSE (application/json)
        code: 200 | 500
        body: {
            "data": [
                {
                    "id": 1,
                    "name": "Work"
                },{
                    "id": 2,
                    "name": "Gamers"
                }
            ]
        }
```
7. Obtener un grupo específico
```
    REQUEST (application/json)
        type: GET
        path: /group/{group_id}
    RESPONSE (application/json)
        code: 200 | 404 | 400 | 500
        body:{
            "id": 2
            "name": "Work",
            "contacts": [
                {
                    "id": 12
                    "full_name": "Dave Bradley",
                    "email": "dave@gmail.com",
                    "address":"47568 NW 34ST, 33434 FL, USA",
                    "phone":"7864445566",
                    "groups": [2,3]
                }
             ]
        }
```
8. Actualizar el id de un grupo dado
```
    REQUEST (application/json)
        type: PUT
        path: /group/{group_id}
        body: {
            "name": "Beach Crew",
        }
    RESPONSE (application/json)
        code: 200 | 404 | 400 | 500
        body:{
            "id": 2
            "name": "Beach Crew",
        }
```
9. Eliminar un grupo por id
```
    REQUEST (application/json)
        type: DELETE
        path: /group/{group_id}
        body: null
    RESPONSE (application/json)
        code: 200 | 404 | 500
        body: {
            "deleted": {
                "id": 2,
                "name": "Beach Crew",
            }
        }
```  
  
  
## 💡 ¿Como Comenzar?

1. Comienza leyendo las instrucciones muy cuidadosamente.
2. Build the database model class Contact and Group.
3. Implemente el método (POST) para poder agregar algunos contactos y grupos a la base de datos para asegurarse de que tiene datos ficticios.
4. Crea el GET(all) endpoints. Lista de contactos y lista de grupos.
5. Implementa el rest de los endpoints.
6. Conecta tu aplicación de React Contact List usando `fetch`.
  
Sugerencia: use Postman como una herramienta de prueba antes de conectar su aplicación frontal (React Contact List).
## 📖 Fundamentos

Este ejercicio te hará practicar los siguientes fundamentos:

1. Leer la Documentación de la API
2. Construir una RESTful API
2. Construir modelos de data
3. Base de Datos SQL
4. REST API's
5. Python Flask
6. Fetch y async
  
  
