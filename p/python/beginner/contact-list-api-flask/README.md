# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Contact List REST API in Flask

Creating and maintaining REST APIs is THE everyday job for most of backend developers, so it is a skill that we need to mature. In this project we'll practice every step of the API development process.

We are going to build the API that manages a contact-list database and publicly expose the endpoints so client applications (including ours) can use it. This time we'll include *Groups*, a new entity that will allow the system to group *Contacts*. Example: Work, Family, Friends. **Hint**: we can implement this logic by using a *many-to-many* relationship between the two tables. 

## 📝 Instructions

Create an API with the following endpoints:

1. Get a list of all the Contacts `GET /contact/all`
2. Create a new Contact `POST /contact`
3. Get a specific Contact (with the Group objects it belongs to) `GET /contact/{contact_id}`
4. Delete a Contact `DELETE /contact/{contact_id}`
5. Update a Contact `UPDATE /contact/{contact_id}`
6. Get a list of all the Group names and ids `GET /group/all`
7. Create a new Group `POST /group`
8. Get a specific Group (with all Contact objects related to it) `GET /group/{group_id}`
9. Update a Group name `UPDATE /group/{group_id}`
10. Delete a Group `DELETE /group/{group_id}`

A contact must have the following data-structure on the database:
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
                "phone":"7864445566",
                "groups": [2,3]
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
3. Get a specific Contact
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
4. Update a given contact 
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
5. Delete a contact by id 
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
6. List all Groups
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
7. Get a specific Group
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
8. Update a given group's id 
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
9. Delete a group by id 
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
  
  
## 💡 How to start?

1. Start by reading the instructions very carefully.
2. Build the database model class Contact and Group.
3. Implement the add methods (POST) to be able to add some contacts and groups into the database to make sure you have dummy data.
4. Create the GET(all) endpoints. List contacts and list groups.
5. Implement the rest of the endpoints.
6. Connect your React Contact List application using `fetch`.
  
Hint: Use Postman as a testing tool before you connect your front end application (React Contact List).
## 📖 Fundamentals

This exercise will make you practice the following fundamentals:

1. Reading API documentations
2. Building an RESTful API
2. Building data models
3. SQL Databases
4. REST API's
5. Python Flask
6. Fetch and async
  
  
