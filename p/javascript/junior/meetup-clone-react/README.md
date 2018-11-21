# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Contact Managment Application 

Technologies: HTML, CSS, JS, React, React Router and React Context API.

Hello! It is time to start doing professional front-end applications. This time
we will be creating a small Meetup.com application that allows users to Browse and RSVP events, very similar to how Meetup.com works.

**Event**s the are center entity in the system, the main view (Home) will have a list of **Event**s organized by date.
Each **Event** is linked to _a single **Meetup**_.
A **Meetup** can be linked to _one or more_ **Event**s.

_Optimized for groups of 2-3 students._

## This project is meant to be done in two phases

First we want to focus on the visuals, make sure the viewable structures are working correctly. 
Secondly, we should implement the dynamic data display.

### Phase 1: Create the views, then link them with React Router in your Layout Component.

Each group must create the projects ***view components***: 
- Home (List of Events)
- Event detail
- Meetup detail

Use dummy content initially. 

On Meetup.com, Meetups are the groups or organizations hosting the events. 

##### Each Meetup must have:
- Title
- Description


In contrast, the events are the specific events that the group is hosting through the month. 

##### Each event must have:
- Title
- Description
- Date
- Time
- Meetup



Note: Think DRY (Don't repeat yourself) and declare only ***one*** component and use ```props``` to handle similar structure but different content.

REMEMBER: Anchor tags will cause a redirect, which you don't want in React. Be sure to use the ``` Link ``` component from React Router to implement the navigation between views.

```jsx
...

<Link to="/event">
	Title of event
</Link>

...
```


### Phase 2: Make the app dynamic by implementing React Context.

***Use the store to fill the dummy content*** within the views/components. The store is accessible using the ```Context.Consumer```

##### Reference: Using the Context

The `store` structure (```/store/store.js```):

Some dummy content.

```javascript
store = {
    events:[
        {
            ID: 36,
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
            post_title: "Lorem Event",
            meta_keys: {
                day: "20180428",
                time: "07:00:00",
                _meetup: "9",
                _rsvpNo: [
                    "robert",
                    "jjtime",
                    "username2"
                ],
                _rsvpYes: {
                    "cheeselover",
                    "neweradude",
                    "james1996"
                }
            }
        },
        ...
    ],
    meetups:[
        {
            ID: 9,
            post_content: "The nicest Meetup ever",
            post_title: "Tech Enthusiasts",
        },
        ...
    ],
    session:{
        ID: 2,
        username: "theUser",
        password: "1234",
        token: "qwerty12345asdfgzxcv"
    }
    ]
};
```

In order to have access to the global data, you must import the context: 
```jsx

import {Context} from '/path/to/store/appContext.jsx';

...

//Then use the Consumer within the render method
    render(){
        return(
            <Context.Consumer>
                {
                    ({store}) => {
                        //Then you can use the data structure within store into 
                        return (<span> hello, {store.events[0].post_title} </span>);
                        
                    }
                }
            </Context.Consumer>
        );
    }
...

```

All of your Fetch/AJAX will be in the ```componentDidMount()``` section of the appContext.jsx file.

### How to start?

Start with the React boilerplate.

## Steps to install the boilerplate

Note: breathecode-cli uses nvm 8:

```$ nvm install 8```

```$ nvm use 8```

##### 0. Make sure you have breathecode-cli installed in your environment. [Detailed instructions](https://www.npmjs.com/package/@breathecode/breathecode-cli)
```
$ npm install -g breathecode-cli
````

##### 1. Start the React boilerplate
```
$ breathecode start:react-project
```
##### 2. Install the /node_modules
```
$ npm install
```
##### 3. Run the webpack development server
```
$ npm run c9
```

That's it! Time to code.

_"The scariest moment is always before you start"_

-_Stephen King_

