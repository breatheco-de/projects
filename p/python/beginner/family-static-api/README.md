# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Family Static API

The Doe Family needs a static API! We need to build the *data structures* and create API endpoint to interact with it using Postman.

## ⚠️ Download the boilerplate

Please download one of the following bolerplates to start coding your exercise or open it on gitpod.io:
- Django: [https://github.com/breatheco-de/exercise-family-static-api-django](https://github.com/breatheco-de/exercise-family-static-api-django)
- Flask: [https://github.com/4GeeksAcademy/flask-rest-hello](https://github.com/4GeeksAcademy/flask-rest-hello)

- Create the code needed to developer the API endpoints described further below.
- The only two files you have to edit are:
	- For Django: `api/family_datastructure.py`, `api/views.py`.
	- For Flask: `src/family_datastructure.py`, `src/main.py`.
- We have prepared a set of automated tests that will give you an idea if your code is correct, run the tests by typing `$ pipenv run tests` on the command line.

## Data structures

Every **member** of the Doe family must be a dictionary - equivalent of [Objects Literals in JS](https://www.dyn-web.com/tutorials/object-literal/) - and have these values:
```
    + id: Int
    + first_name: String
    + last_name: String (Always Doe)
    + age: Int > 0
    + gender: String
    + lucky_numbers: Array of int
```
The **family** data-structure will be a class with the following structure:

```python
class Family:

	def __init__(self, last_name):
		self.last_name = last_name
        # example list of members
        self._members = [{
            "id": self._generateId(),
            "first_name": "John"
        }]

    # read-only: Use this method to generate random members ID's when adding members into the list
    def _generateId(self):
        return randint(0, 99999999)

	def add_member(self, member):
        ## you have to implement this method
        ## append the member to the list of _members
		pass

	def delete_member(self, id):
        ## you have to implement this method
        ## loop the list and delete the member with the given id
		pass

	def update_member(self, id, member):
        ## you have to implement this method
        ## loop the list and replace the memeber with the given id
		pass

	def get_member(self, id):
        ## you have to implement this method
        ## loop all the members and return the one with the given id
		pass

	def get_all_members(self, id):
		return self._members
```

## These are the initial Family Members

```md
John Doe
33 Years old
Male
Lucky Numbers: 7, 13, 22

Jane Doe
35 Years old
Female
Lucky Numbers: 10, 14, 3

Jimmy Doe
5 Years old
Male
Lucky Numbers: 1
```

## Endpoints

This API must have two endpoints, both return JSON:

### 1) Get all family members:
Which returns the information from the Doe's family.. E.g:

```md
GET /member

RESPONSE (Application/JSON):

    status_code: 200 if successfully added, 400 if it doesn't because the client-side (request) screw up, 500 if the server encouner an error
    content-type: Application/JSON
    body: an JSON Object that contains:
        - members: Array of members.
        - family_name: the family's last name.
        - lucky_numbers: An array with all family member's lucky numbers.
        - sum_of_lucky: Sum of all family member's lucky numbers.
```
Important: There are two fields that must be calculated on runtime:
- lucky_numbers is the concatenation of all the lucky numbers from the family members
- sum_of_lucky is the sum of all the lucky numbers of the family members


### 2) Retrieve just one member

```md
GET /member/<int:member_id>
Which returns the member of the family where `id == member_id`. E, g:

RESPONSE (application/json):

    status_code: 200 if successfully added, 400 if it doesn't because the client-side (request) screw up, 500 if the server encouner an error
    content_type: Application/JSON
    body: the member json object
```



### 3) Add (POST) one member

```md
POST /member
Which adds a new member into the Family datastructure

RESPONSE (application/json):

    status_code: 200 if successfully added, 400 if it doesn't because the client-side (request) screw up, 500 if the server encouner an error
    content_type: Application/JSON
    body: the member json object
```



### 4) DELETE one member

```md
POST /member/<int:member_id>
Which deletes a given member by the given ID

RESPONSE (application/json):

    status_code: 200 if successfully deleted, 400 if it doesn't because the client-side (request) screw up, 500 if the server encouner an error
    content_type: Application/JSON
    body: the member json object
```

## Technology Requirements

- All requests and reponses should be in content/type: application/json
- Response codes must be `200` for success, `400` for bad request or `404` for not found.
- This exercise does not include a database, everything must be done in RAM memory.
