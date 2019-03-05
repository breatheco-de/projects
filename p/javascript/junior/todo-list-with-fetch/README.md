# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Second Part of the TODO list, adding fetch

This exercise is meant to be completed after the [TODO list react application](https://projects.breatheco.de/d/todo-list#readme) because the first part its the perfect boilerplate to start using API's.

For this second part, we will sync our todo list with a real database, using a [RESTful](http://content.breatheco.de/lesson/understanding-rest-apis) and public API made for this exercise.

The whole exercise is about asyncrunis programming because the interactions from and to the server need to be done async. That way the user does not have to wait for the information to arrive.

## Instructions:
- Make your to-do list sync with the backend API every time a task is added or deleted.
- Add a clean all tasks button that will delete the entire list from the server and update the empty list on the front-end.

There are 3 critical moments in the application timeline (a.k.a. The runtime) to focus on your integration:
- **After the list loads empty for the first time (componentDidMount)**: you should fetch (GET) the data from the API and update the tasks when the information finally arrives.
- **When a new task is added**: You should PUT the new list on the server.
- **When a task is deleted**: You should PUT the new list on the server.