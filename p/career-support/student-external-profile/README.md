 # Student External Profile

![Buddy Works Build](https://app.buddy.works/breathecode/student-external-profile/pipelines/pipeline/162573/badge.svg?token=7fd65f24ee0daa2c60600820880d585a0bf52da8e65b5ef1f886615b58237012)
![Travis Build](https://api.travis-ci.org/4GeeksAcademy/student-external-profile.svg?branch=master)

It is time to start your first GitHub contribution. Github has a way of pushing code into a repository without owning it even being invited to it, it is called `Pull Request` and this exercises main objective is to create your first `Pull Request` ever.

At the same time, you will start building your student profile (one of the most significant accomplishments you can have at the academy) for several purposes at the academy:
- It will be the first version of your developer portfolio.
- It will be the first version of your Resume.
- It will give you context: You can see it as a table of content of everything you will be learning throughout the course.

This `Student Showcase` it's still in beta and you are one of the first students to become a part of it, find the list of students that have their profile already built on the [following url](http://sep.4geeksacademy.co/students/), you can also click on the students name to find a beta version of how the student profile looks right now.

## How to build your own profile inside the Student Showcase?

1. Fork the repository.
2. Clone the new repository that was created when you forked the original one.
3. Create a file `<your_github_username>.yml` file inside `/src/students/` with your profile information. For example: [rigoberto.yml](https://github.com/4GeeksAcademy/student-external-profile/blob/master/src/students/example.yml).
4. Commit and push your changes.
5. Go to github.com and look for your repository, you will find a button to "Pull Request" your repository back into the main repository.

The `YML` file must contain all your personal and professional information, after completing the YML fill the application will automatically generate a student portfolio like the following:

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/4GeeksAcademy/student-external-profile/master/preview.png">
</p>

<p align="center">
  <a href="https://4geeksacademy.github.io/student-external-profile/sharu725" target="_blank">Wach Live Demo Here</a>
</p>

```
Note: You can test your `YML` syntax here: http://www.yamllint.com/
```

## Completing the YML file

The YML file its comprised of 4 major sections:
```yml
theme: You can choose a theme and skin colors.
basic_info: Personal info
education: Previous studies.
Experiences: Previous jobs.
Projects: Describe the projects you've built as a developer.
Publications: Any articles you have published.
Skills: List your skills with a percentage of expertise.
```

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/4GeeksAcademy/student-external-profile/master/static/yml.png">
</p>

You can pick between your template and your skin, for example:
```yml
template: "online-cv"
skin: "orange"
```

