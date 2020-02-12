# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Random Card Dealer (generator)

In this project you will learn how to change your website styles during the runtime using [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

## Instructions

Create and algorithm that randomly builds a card on every refresh:

1. Every time the website refreshes a new random card needs to show
2. The card must have one of the possible suites: Hearts, Spades, Clubs and Diamons.
3. The card value must be one of the following: 1 to 10, King, Queen, Jack or Ace (no joker).

In the end, the project needs to look similar to [this demo](https://projects.breatheco.de/json?slug=random-card&preview).

### Hints

- Remember that the first event on a website lifecycle is [onLoad (your code starts running there)](https://www.w3schools.com/jsref/event_onload.asp), you should generate a random number between 1 and 4 to pick a sute and another random number between 0 and 12 to pick a card number.
- Create a general **.card** class that applies the general styles to each card, and one additional CSS class for each suite: .spade, .club, .heart & .diamond.
- Apply the .card class to the entire div but only apply one of the suite classes at a time depending on what suite you want to apply. For example a 3 of hearts will have this HTML declaration:
```
    <div class='card heart'></div>
```
- You can use images, icons or HTML character entities to generate the sute symbol into the HTML [Here you can find the character entities](https://brajeshwar.github.io/entities/) for the :before and :after content.

![https://ucarecdn.com/7cd14b33-dd69-4680-aaf3-ab16afe2316b/ScreenShot20190511at30921AM.png](https://ucarecdn.com/7cd14b33-dd69-4680-aaf3-ab16afe2316b/ScreenShot20190511at30921AM.png)