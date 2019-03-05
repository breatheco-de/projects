# Starwars Blog Reading List

_The force is strong with this exercise..._

## Phase 1
Create a React webapp that lists the _peope_, _vehicles_ and _planets_ **entities** provided by the [SWAPI](https://swapi.co/documentation). Each entity should have a short description (Bootstrap Card) and a details view (Bootstrap components):

#### Grid view (Cards)
[Star Wars Databank](https://www.starwars.com/databank)

![cards](https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png "Star Wars Grid")

Other reference: [Cards](https://bootsnipp.com/snippets/Vg6mV)

#### Details view
[Star Wars Databank Details](https://www.starwars.com/databank/luke-skywalker)

![details](https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png "Details")


***Important***: The SWAPI doesn't provide the images, you can use placeholders or avoid the images altogether. The focus of this exercise is to practice *fetch*, *router* and *context*; you can focus on the color theme and simple layout to make it look good.

***Important 2***: don't worry if the data you get from the SWAPI doesn't match the data you see in starwars.com.

Use all the information provided by the SWAPI (check the docs and/or the json responses).

## Phase 2
Implement a read-later funcionality, i.e, a button that allows the user to "save" the item (character, vehicle or planet) into a special list. This list will be shown at the bottom of the home page, it resembles the main list but only shows the "saved" elements.

#### Use the Context
To ensure that the user can "save" the item, you must implement an action that can be accessible from anywhere within the app.

