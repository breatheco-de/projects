# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) TicTacToe API With Django & REST

This project is a small API implementation for the TicTacToe Project.

## Instructions

Using the [django framework](https://www.djangoproject.com/) and the [DjangoRest](http://www.django-rest-framework.org/) library develop an API that implements the following API bellow, there is no need for implementing any autentication protocol right now.

1. Get all games logged
```
	[GET] /games
	PARAMS: None
	REQUEST BODY: None
	RESPONSE BODY:
	[
		{
			"player1": "Rose",
			"player2": "Emily",
			"winner": "Rose"
		},
		...
	]
```
2. Add new game to the log
```
	[POST] /game
	PARAMS: None
	REQUEST BODY:
	[
		{
			"id": 1,
			"player1": "Rose",
			"player2": "Emily",
			"winner": "Rose"
		},
		...
	]
	RESPONSE BODY:
	[
		{
			"id": 1,
			"player1": "Rose",
			"player2": "Emily",
			"winner": "Rose"
		},
		...
	]
```
3. Delete all games log
```
	[DELETE] /games
	PARAMS: None
	REQUEST BODY: NONE
	RESPONSE BODY:
	{
		code: 200,
		message: "ok"
	}
```
