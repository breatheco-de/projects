# Code Projects

## API Endpoints

### 1) Retrieving all the projects:
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
### 2) Retrieve single project
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
### 3 Retrieve project preview as an image
```
Request
    GET /json?slug=<project_slug>&preview
    
Response (image/gif || image/jpeg || image/png)
    The actual image in bytes
```


## Describing the info.json

| Property  | Required  | Data Type     | Description                           |
|-----------|-----------|---------------|---------------------------------------|
| title     | true      | string        | project title                         |
| slug      | true      | string        | unique identifier among all projects  |
| status    | true      | enum          | draft, published, deprecated          |
| solution  | true      | url           | solution code repository              |
| duration  | true      | number        | duration in hours                     |
| description  | true      | string        | small description                     |
| talents  | true      | array        | list of talents form the talen try                    |