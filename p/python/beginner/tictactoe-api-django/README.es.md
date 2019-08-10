# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) API de TicTacToe Con Django & REST

Este proyecto es una pequeña implementación de API para el Proyecto TicTacToe.

## Instrucciones

Usando el [framework de django](https://www.djangoproject.com/) y la libreria de [DjangoRest](http://www.django-rest-framework.org/) desarrolla una API que implementa la siguiente API a continuación, no hay necesidad de implementar ningún protocolo de autenticación en este momento.

1. Consigue todos los juegos registrados
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
2. Añadir nuevo juego al registro
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
3. Eliminar todos los registros de juegos
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
