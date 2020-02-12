# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Family Tree Static API

Based on the technologies/strategies we've learn build a static API that handles a family tree. You're free to use your own family information, you can use fake data too.

## Requirements

Your API must have, at least, 7 members spread throughout 3 generations:

**grandparent -> parent -> current generation**

The family tree must be represented as a object tree structure, i.e.: each person (node in the tree) must have: id, name, lastname, age, and a reference (id) to its parents and children (if any).

The API must expose an endpoint that returns the full list of family members ordered by oldest to younger.

The API must expose an endpoint that returns a specific member of the family tree by their id (which should be unique) and the information about its children and parents.

### Technologies

The API must be developed using **Flask** and each endpoint must return a *valid* **JSON** file.

### Hints

You may want to draw (pen and paper) the tree structure to have a "visual" structure in mind. Use the lines to display the references between parents and children.

The references should be the members' id number.

Create your data structures before you create the endpoints, use global variables.
  