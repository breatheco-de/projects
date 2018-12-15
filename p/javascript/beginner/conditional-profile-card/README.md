# Conditional Profile Card

As a web developer, you will be creating lots of dynamic HTML+CSS using Javascript algorithms.

In this exercise you have to create the HTML code needed to render a profile card. The final code will change on runtime based on a series of variables that could. Here is an example of the profile card:

![Conditional Profile Card](https://raw.githubusercontent.com/breatheco-de/exercise-conditional-profile-card/master/preview.png)

## Initial Variable Values

| Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| background | string | null | the url of the image that will be used as background for the profile cover |
| includeCover | boolean | true | it determines if the cover should be displayed |
| avatarURL | string | null | the url for the profile avatar image |
| socialMediaPosition | string | "right" | it can be `left` or `right` and it determines where to place the social media bar |
| twitter | string | null | the twitter username to be displayed on the profile |
| github | string | null | the github username to be displayed on the profile |
| linkedin | string | null | the linkedin username to be displayed on the profile |
| instagram | string | null | the instagram username to be displayed on the profile |
| name | string | null | The name of the user to be displayed on the profile |
| lastname | string | null | The name of the user to be displayed on the profile |
| role | string | null | The name of the job title to be displayed on the profile |
| country | string | null | The country of residence of the user to be displayed on the profile |
| city | string | null | the city of residence of the user to be displayed on the profile |

## Hard-Coded HTML Example

This is an example of a possible HTML **output**, you must replace: 
  *name*,           //h1 
  *lastname*,       //h1
  *role*,           //h2
  *city*,           //h3
  *country*,        //h3
  *social networks*,//ul
  *photo*,          //img
  *background*,     //div->img

With real values.

```html
<div class="widget">
  <div class="cover"><img src="https://the_url.com/for_the_background.png" /></div>
  <img src="https://the_url.com/for_the_image.png" class="photo" />
  <h1>Ryan Boylett</h1>
  <h2>Web Developer</h2>
  <h3>Miami, USA</h3>
  <ul class="position-right">
    <li><a href="https://twitter.com/alesanchezr"><i class="fa fa-twitter"></i></a></li>
    <li><a href="https://github.com/alesanchezr"><i class="fa fa-github"></i></a></li>
    <li><a href="https://linkedin.com/alesanchezr"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="https://instagram.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>
  </ul>
</div>
```

## Installation

1. Clone this repository to download the initial boilerplate: 

`git clone https://github.com/breatheco-de/exercise-conditional-profile-card`

2. Get into the project folder: 

`cd conditional-profile-card`

3. Install NPM packages: 

`npm install`

4. Buid for the first time: 

`npm run build`

5. If you are using cloud 9, right click on the `public/index.html` file and click "run" to start the server and get your public website link.

6. Start updating the `render` function inside the `index.js` file, that is the only file you have to do `npm run build` again and refresh your public website url.

Note: every time you update any file you will have to build again in order to update the bundle.
