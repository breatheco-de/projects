# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  The Excuse Generator

Disneyland for procrastinators and lazy people. 

This project is ideal to are avoiding someone annoying, it takes no more than 20 lines of code and it can save you for the rest of your life!

## The Goal

We wanted a project that used very little Javascript but still with a very fun application, the excuse generator takes
20 lines of code, is super simple to understand and is the perfect first project for any beginner developer.

## Instructions

Please create a small website that generates an excuse each time a button is pressed, it has to look like this: [Checkout the demo animation](https://projects.breatheco.de/json?slug=excuse-generator&preview).

## Discuss with your classmates the strategy first

How can we generate an excuse? How are sentences build?

![Excuse generator explanation](https://github.com/breatheco-de/projects/blob/master/p/javascript/beginner/excuse-generator/explanation.gif?raw=true)

The idea is to generate each part of the sentence randomly to come up with great excuses!

## Hint

1. Create a index.html with one excuse hard-coded, no js, just one excuse in pure plain HTML.
2. The excuse must be inside an HTML tag that has an id assinged, for example:
```html
  <p id="excuse">My dog eat my homework</p>
```
3. Using javascript, create a function that generates and returns a random excuse with the following structure:
```js
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
```
4. To create a consistent excuse you have to concatenate one item from each array in the proper order.
5. Call that function onLoad and set the excuse into the innerHTML of the #excuse HTML element.


## Technologies

HTML, CSS3, Sass, Javascript, Webpack.

## Fundamentals
This exercise covers the following fundamentals:
1. Using external Javascript files in your project.
2. How to work with Arrays.
3. Generating random numbers.
4. Concatenating strings.
5. Using functions (at least a bit).
6. Working with events (at least a bit).
