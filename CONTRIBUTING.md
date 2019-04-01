# Uploading a project exercise to the pool of projects

## How do you Choose your Project?

1. Pick a set of skills to practice.
2. Make sure its really fun or something used in real life.
3. Try to make it short: No more than a few hours (you can ask the students to download a boilerplate with previous code that they have to complete instead of starting always from scratch)

## How to submit a project?

**Basically you have to submit a pull request** to this repository, your project must be droped insited the `/p` folder depending on the project technology and difficulty, for example:
```
p/css/beginner/<your_project_name>
```
Tip: 💡[here you can browse the current projects](https://github.com/breatheco-de/projects/tree/master/p).

Every project its basically a folder with the following file inside:

1. **README.md** with the project instructions.
2. **info.json** with the project metada (description of the project)
3. **preview.git** or proview.png with a project preview (it is strongly recomended to have an animated preview of the project).
4. **video.json** (optional but strongly recomended) if you have a youtube video doing the project that students can use as backup.

Tip: 💡[here is an exampe of a project](https://github.com/breatheco-de/projects/tree/master/p/css/beginner/postcard)


### The `README.md` file

Its a markdown syntax file containing detailed instructions on what to do, the more visual the better. 
Make sure instrucitons are very clear and there is no room for questions on that matter.
Here is an example of [a great README.md file](https://github.com/breatheco-de/projects/blob/master/p/css/beginner/postcard/README.md).

### The `info.json` file

| Property  | Required  | Data Type     | Description                           |
|-----------|-----------|---------------|---------------------------------------|
| title     | true      | string        | project title                         |
| slug      | true      | string        | unique identifier among all projects  |
| status    | true      | enum          | draft, published, deprecated          |
| solution  | true      | url           | solution code repository              |
| duration  | true      | number        | duration in hours                     |
| description  | true      | string        | small description                     |
| talents  | true      | array        | list of talents form the talen try                    |

### The `preview.gif` or `preview.png` file

we strongly recomend you record the project solution using something like [Recordit.co](http://recordit.co/), an image speaks more than a thousand words. Here is an example of a project ideal preview:

<p align="center">
  <img height="400px" src="https://github.com/breatheco-de/projects/blob/master/p/css/junior/instagram-feed-bootstrap/preview.gif" />
</p>
