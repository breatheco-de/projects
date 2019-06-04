# Starwars Blog Reading List

_The force is strong with this exercise..._

## Objective

We are going to be building a minimalist version of the [Star Wars Databank](https://www.starwars.com/databank) with a React Later or Favorites list functionality.

### Here is the demo!

<p align="center">
   <img src="https://projects.breatheco.de/json?slug=startwars-blog-reading-list&preview" />
</p>

#### Building the grid of Characters and Planets

- Create a React webapp that lists the _peope_, _vehicles_ and _planets_ **entities** provided by the [SWAPI](https://swapi.co/documentation). 

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

#### Building a details view for Character or Planet

- Each entity should have a short description (Bootstrap Card) and a details view (Bootstrap components):

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Important***: The SWAPI doesn't provide the images, you can use placeholders or avoid the images altogether. The focus of this exercise is to practice *fetch*, *router* and *context*; you can focus on the color theme and simple layout to make it look good.

***Important 2***: don't worry if the data you get from the SWAPI doesn't match the data you see in starwars.com.

Use all the information provided by the SWAPI (check the docs and/or the json responses).

## Read Later or Favorites functionlity

Implement a read-later funcionality, i.e, a button that allows the user to "save" the item (character, vehicle or planet) into a special list. This list will be shown at the bottom of the home page, it resembles the main list but only shows the "saved" elements.

#### Use the Context

To ensure that the user can "save" the item, you must implement an action that can be accessible from anywhere within the app.

