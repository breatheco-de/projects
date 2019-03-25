# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Family Static API
  
The Doe Family needs a static API! We need to build the *data structures* and create breakpoints to interact.

## Data structures
Every **member** of the Doe family must have these values:

+ id: Int
+ name: String
+ lastname: String (Always Doe)
+ age: Int > 0
+ gender: String
+ lucky_numbers: Array of int

The **family** dict (dictionary, equivalent of Objects in JS):

+ lastname: "Doe"
+ members: Array of member


**Hint**: this is a clone from *Begin with JS - #10 Javascript Objects* Replit [exercise](https://repl.it/student/submissions/5855972). Now to be translated into Python and a static API


## Family Members

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

## Endpoints

This API must have two endpoints, both return JSON:

#### `/members`
Which returns the information from the Doe's family.. E.g:

+ status_code: This key represents the [HTTP_status_code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
+ data: an Object that contains:
    + members: Array of members.
    + family_name: the family's last name.
    + lucky_numbers: An array with all family member's lucky numbers.
    + sum_of_lucky: Sum of all family member's lucky numbers.

Important: There are two fields that must be calculated on runtime:

+ lucky_numbers is the concatenation of all the lucky numbers from the family members

+ sum_of_lucky is the sum of all the lucky numbers of the family members


#### `/members/<int:member_id>`
Which returns the member of the family where `id == member_id`. E, g:

+ status_code: This key represents the [HTTP_status_code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). 200 if member exists or 400 if it doesn't.
+ data: the member object 
  OR
+ message: "member not found"
  