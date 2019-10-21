# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Meetup Clone with Context

Technologies: HTML, CSS, JS, React, React Hooks, React Router and React Context API.

Hello! It is time to begin creating professional front-end applications. This time
we will be building a small Meetup.com clone that allows users to Browse and RSVP events, very similar to how Meetup.com works.

**Event**s the are center entity in the system, the main view (Home) will have a list of **Event**s organized by date.
Each **Event** is linked to _a single **Group**_.
A **Group** can be linked to _one or more_ **Event**s.

_This project is optimized for groups of 2-3 students._

## This project is meant to be done in two phases

First we want to focus on the visuals, make sure the viewable structures are working correctly.
Secondly, we should implement the dynamic data display.

### Phase 1: Create the views, then link them with React Router in your Layout Component.

Each group must create the projects ***view components***:

- Home (List of Events)
- Event detail (View of a specific Event)
- Group detail (View for the Group with a list of upcomming events for the group)

***NOTE:*** You should draw wireframes first to gather your ideas. Also, make sure to use dummy content initially. PLEASE USE MEETUP.COM AS A DESIGN REFERENCE!

#### Each Group must have

- Title
- Description
- Members

#### Each Event must have

- Title
- Description
- Date
- Time
- Group (This is an ID for the group)

After you finish your wireframes, get to coding. Please make sure to only use functional components and if you need to define state variables or do something during the component lifecycle, use the corresponding hooks. (`useState()` and `useEffect()`)

***Note:*** Think DRY (Don't repeat yourself) and declare only ***one*** component and use ```props``` to handle similar structure but different content. Context should be used only when you need to share data between many views. Always use props when you can and context sparingly.

***REMEMBER:*** Anchor tags will cause a redirect, which you don't want in React. Be sure to import and use the ```Link``` component from React Router to implement the navigation between views.

```jsx
...

<Link to="/event">
    Title of event
</Link>

...
```

### Phase 2: Make the app dynamic by implementing React Context

React context is built into the flux boilerplate. If you are having trouble understanding how context works, please take a look at the demo component that comes with it. (In your views folder)

***Use the store to fill the dummy content*** within the views/components. The store is accessible using the ```Consumer```

#### Reference: Using the Context

The `store` structure (```/store/store.js```):

Below, you will find an example of the data for the Meetup clone. This consists of 2 arrays (events and meetups) and an abject for the user session.

You can replace your current store object with this data and even expand it to add more events and groups. Remember that this is placeholder data for now. Later on, we will be using fetch to pull the data in from an API.

```javascript
store: {
    events:[
        {
            ID: 36,
            post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
            post_title: "Lorem Event",
            meta_keys: {
                day: "20180428",
                time: "07:00:00",
                _groupId: 9,
                _rsvpNo: [
                    "robert",
                    "jjtime",
                    "username2"
                ],
                _rsvpYes: [
                    "cheeselover",
                    "neweradude",
                    "james1996"
                ]
            }
        }
    ],
    Groups:[
        {
            ID: 9,
            post_content: "The nicest Meetup ever",
            post_title: "Tech Enthusiasts",
            members: [
                "robert",
                "jjtime",
                "username2",
                "cheeselover",
                "neweradude",
                "james1996"
            ]
        }
    ],
    session:{
        ID: 2,
        username: "theUser",
        user_friendly_name:"Joey",
        token: "qwerty12345asdfgzxcv"
    }
};
```

In order to have access to the global data from your store in one of your components, you must import the Context Consumer. See the example below.

```jsx

import {Consumer} from '/path/to/store/appContext.jsx';

...

//Then use the Consumer within your return
    return(
        <Consumer>
            {
                ({store}) => { //When you destructure the store here, you can also pass actions.
                    //Then you can use the data structure within the store into your return
                    return (<span> hello, {store.events[0].post_title} </span>);
                }
            }
        </Consumer>
    );
...

```

All of your Fetch/AJAX calls will be in the ```useEffect()``` section of the appContext.jsx file. Due to the way the boilerplate is built, this area handles the calls that are done only at the initial load of your application.

## How to start

Start with the React boilerplate.

### Steps to use the boilerplate with Gitpod

1. Login to `student.breatheco.de`
2. From the left navigation, click on `</> Start New Project`
3. In the main panel, select `New React Flux`

### Steps to install the boilerplate locally (Mac/Linux)

Note: breathecode-cli uses nvm 8:

```$ nvm install 8```

```$ nvm use 8```

#### 0. Make sure you have breathecode-cli installed in your environment. [Detailed instructions](https://www.npmjs.com/package/@breathecode/breathecode-cli)

In your terminal, run the command:

```bash
npm install -g breathecode-cli
```

#### 1. Start the React boilerplate

In your terminal, run the command:

```bash
bc start:react-project
```

#### 2. Install the /node_modules

In your terminal, run the command:

```bash
npm install
```

#### 3. Run the webpack development server

In your terminal, run the command:

```bash
npm run dev-server
```

That's it! Time to code.

_"The scariest moment is always before you start"_

-_Stephen King_
