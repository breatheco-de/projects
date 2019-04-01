<p align="center"><img src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128"></p>
<h1 align="center"> BreatheCode's Project-Exercises Pool </h1>

By now, everybody knows that learning to code has to be a practical experience: No much reading or watching videos, but choosing projects its still one of the bigges limitations in students learning process because of the following reasons:

- Bad instructions: Making them harder to complete or start.
- Boring projects: Students loose motivation because they don't identify with the project.
- To dificult for your current level: How do I know if I will be able to finish it?
- Old technologies: There are too much projects out there, the majority in old deprecated technologies.
- What do I do if I'm stuck in the middle of the project? There is not model solution or video tutorial to help me.

## What is this?

We have decided to create a database of projects for people learning to code. We want to invite anyone to contribute and upload projects using the following guide: [Submiting a project](https://github.com/breatheco-de/projects/blob/master/CONTRIBUTING.md).

Once your Pull-Request is approved it will be automatically published as part of the pool in the [following link](https://projects.breatheco.de).

## The projects API

All projects in the pool are also automatically published in the following JSON API: 

HOST: [https://projects.breatheco.de/json](https://projects.breatheco.de/json)

### API Endpoints

#### 1) Retrieving all the projects:
```
Request:
    GET /json
    
Response (application/json):

[
    {
        readme: "p/css/beginner/html5-form/README.md",
        preview: "p/css/beginner/html5-form/preview.png",
        status: "draft",
        title: "Create a HTML5 form",
        slug: "html5-form",
        duration: 3,
        description: "Create a HTML5 form with all the typical inputs",
        talents: [],
        info-path: "../p/css/beginner/html5-form/info.json",
        name: "",
        url: "../p/css/beginner/html5-form/",
        technology: "css",
        difficulty: "beginner",
        category: "html5-form",
        folder-name: ""
    }
    ...
]
```
#### 2) Retrieve single project
```
Request:
    GET /json?slug=<project_slug>
    
Reponse (application/json):

    {
        readme: "p/css/beginner/html5-form/README.md",
        preview: "p/css/beginner/html5-form/preview.png",
        status: "draft",
        title: "Create a HTML5 form",
        slug: "html5-form",
        duration: 3,
        description: "Create a HTML5 form with all the typical inputs",
        talents: [],
        info-path: "../p/css/beginner/html5-form/info.json",
        name: "",
        url: "../p/css/beginner/html5-form/",
        technology: "css",
        difficulty: "beginner",
        category: "html5-form",
        folder-name: ""
    }
```
#### 3 Retrieve project preview as an image
```
Request
    GET /json?slug=<project_slug>&preview
    
Response (image/gif || image/jpeg || image/png)
    The actual image in bytes
```


### Describing the info.json

| Property  | Required  | Data Type     | Description                           |
|-----------|-----------|---------------|---------------------------------------|
| title     | true      | string        | project title                         |
| slug      | true      | string        | unique identifier among all projects  |
| status    | true      | enum          | draft, published, deprecated          |
| solution  | true      | url           | solution code repository              |
| duration  | true      | number        | duration in hours                     |
| description  | true      | string        | small description                     |
| talents  | true      | array        | list of talents form the talen try                    |
