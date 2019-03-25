# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Contact List REST API in Flask

Creating REST API's is an everyday job for lots of backend developers, this project will take you over all the steps normally required for building one.

We are going to build the API necesary to manage a contact database and publicly expose the endpoints so front-end applications can use them.

## 📝 Instructions

Create an API that includes enpoints for the following cases:

1. Get a list of all the contacts `GET /contact/all`
2. Create new contact `POST /contact`
3. Delete a contact `DELETE /contact/{contact_id}`
4. Update a contact `UPDATE /contact/{contact_id}`

A contact must have the following data-structure on the database:
```js
    {
        "full_name": "Dave Bradley",
        "email": "dave@gmail.com",
        "address":"47568 NW 34ST, 33434 FL, USA",
        "phone":"7864445566"
    }
```

## Formal API Documentation

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
                "phone":"7864445566"
            },
            ...
        ]
```
2. Create a new contact
```
    REQUEST (application/json)
        type: POST
        path: /contact
        body: {
            full_name (string, mandatory)
            email (string, mandatory)
            address (stirng, optional)
            phone (string, optional)
        }
    RESPONSE (application/json)
        code: 200 | 400 | 500
        body: {
            "id": 12
            "full_name": "Dave Bradley",
            "email": "dave@gmail.com",
            "address":"47568 NW 34ST, 33434 FL, USA",
            "phone":"7864445566"
        }
```
3. Update a give contact 
```
    REQUEST (application/json)
        type: PUT
        path: /contact/{contact_id}
        body: {
            full_name (string, optional)
            email (string, optional)
            address (stirng, optional)
            phone (string, optional)
        }
    RESPONSE (application/json)
        code: 200 | 404 | 400 | 500
        body:{
            "id": 12
            "full_name": "Dave Bradley",
            "email": "dave@gmail.com",
            "address":"47568 NW 34ST, 33434 FL, USA",
            "phone":"7864445566"
        }
```
4. Delete a contact by id 
```
    REQUEST (application/json)
        type: DELETE
        path: /contact/{contact_id}
        body: null
    RESPONSE (application/json)
        code: 200 | 404 | 500
        body: null
```

## 💡 How to start?

1. Start by reading the instructions very carebully.
2. Build the database model class Contact
3. Manually add some contacts into the database to make sure you have dummy data
4. Create the GET endpoint and request all the contacts into the DB
5. Use postman to make sure the endpoint returns the expected JSON with all the contacts from the database

## 📖 Fundamentals

This exercise will make you practice the following fundamentals:

1. Reading API documentations
2. Building an RESTful API
2. Building data models
3. SQL Databases
4. REST API's
5. Python Flask