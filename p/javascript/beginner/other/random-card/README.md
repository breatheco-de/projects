# Random Card Dealer (generator)

In this project you will learn how to change your website styles during the runtime using (VanillaJS)[https://stackoverflow.com/questions/20435653/what-is-vanillajs] (plain normal js).

## Instructions

Create and algorithm that randomly builds a card on every refresh:

1. Every time the website refreshes a new random card needs to show
2. The card must have one of the possible suites: Hearts, Spades, Clubs and Diamons.
2. The card value must be one of the following: 1 to 10, King, Queen, Jack or Ace (no joker).

### Hints 

- Remember that the first event on a website lifecicle is onload (your code starts running there)
- Create a CSS for each suite
- (Here you can find the character entities)[https://brajeshwar.github.io/entities/] for the :before and :after content.

HTML	| Symbol	| Numeric	| Description	                    | Hex	        | CSS (ISO) | JS (Octal)|
--------|-----------|-----------|-----------------------------------|---------------|-----------|-----------|
&loz;	| ◊	        | &#9674;	| lozenge	                        | u+25CA ISOpub	| \25CA	    | \u25ca    |
&spades;| ♠	        | &#9824;	| black spade suit                  | u+2660 ISOpub	| \2660	    | \u2660    |
&clubs;	| ♣	        | &#9827;	| black club suit, a.k.a. shamrock  | u+2663 ISOpub	| \2663	    | \u2663    |
&hearts;| ♥	        | &#9829;	| black heart suit, a.k.a. valentine| u+2665 ISOpub	| \2665	    | \u2665    |
&diams;	| ♣	        | &#9830;	| black diamond suit                | u+2663 ISOpub	| \2666	    | \u2666    |