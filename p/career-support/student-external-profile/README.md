 # Student External Profile

<p align="center"><img src="https://projects.breatheco.de/json?slug=student-external-profile&preview" height="400" /></p>  
 

It is time to start your first GitHub contribution. Git offers a way of pushing code into a repository without owning it, or even being invited to it, it is called `Pull Request` and this exercise's main objective is to create your first `Pull Request` ever.
  
At the same time, you will start building your student profile, one of the most significant accomplishments you can have at the academy because:
- It will be the first version of your developer portfolio.
- It will be the first version of your Resume (as a coder).
- It will give more context to your learning experience: You can see a table of everything you will be learning throughout the course.
  
This `Student Showcase` its still in beta and you are one of the first students to become a contributor. You can find the list of students that have their profile already built on the [FOLLOWING URL](http://sep.4geeksacademy.co/students/), you can also click on the students name to find a beta version of how the student profile looks right now.
  
Don't worry about the content of your profile, today its just about the YML and making sure you show up on the [student list](http://sep.4geeksacademy.co/students/).

## How to build your own profile inside the Student Showcase?

1. Fork [the repository](https://github.com/4GeeksAcademy/student-external-profile/).

  ![alt-text](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)
  
  A new repository will be created in your account.
  
2. Clone the new repository into your *workspace*.
  
  ```$ git clone <url_of_repository> ```
  
3. In your *workspace*, create a file `<your_github_username>.yml` file inside `/src/students/` with your profile information. 

  The `YML` file must contain all your personal and professional information. Check the details in [Completing the YML file](#completing-the-yml-file)
  
  For example: [rigoberto.yml](https://github.com/4GeeksAcademy/student-external-profile/blob/master/src/students/example.yml).
  
  ```
  Importante: You should test your `YML` syntax here: http://www.yamllint.com/
  ```

4. Commit and push your changes.

  `$ git add .`
  
  `$ git commit -m "my profile"`
  
  `$ git push origin master`
  

5. Go back to [Github](https://github.com) and look for the recently created repository. In it you will find a button to "Pull Request" your changes back into the main repository.

  ![alt-text](https://github-images.s3.amazonaws.com/help/pull_requests/recently_pushed_branch.png)


After completing the PR (Pull Request) the application will automatically generate your own student portfolio, to see it, see if your name appears here: 

**[http://sep.4geeksacademy.co/students](http://sep.4geeksacademy.co/students)**

Your profile should look like the following:

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/4GeeksAcademy/student-external-profile/master/preview.png">
</p>

<p align="center">
  <a href="http://sep.4geeksacademy.co/sharu725" target="_blank">Wach Live Demo Here</a>
</p>

## Completing the YML file

The YML file it's comprised of 4 major sections:
```yml
theme: You can choose a theme and skin colors.
basic_info: Personal info
education: Previous studies.
experiences: Previous jobs.
projects: Describe the projects you've built as a developer.
publications: Any articles you have published.
skills: List your skills with a percentage of expertise.
```

<p align="center">
  <img height="350" src="https://raw.githubusercontent.com/4GeeksAcademy/student-external-profile/master/static/yml.png">
</p>

You can pick a different template and skin, for example:

```yml
template: "online-cv"
skin: "orange"
```
