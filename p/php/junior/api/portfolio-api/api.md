FORMAT: 1A
HOST: http://projects.breatheco.de/php-junior/portfolio-api/

# MyPortfolio

Polls is a simple API allowing consumers to view polls and vote in them.

## Projects Collection [/projects]

### List All Projects [GET]

This will give you the list of all the current projects in your portfolio.

+ Response 200 (application/json)

        [
            {
                "id": 1,
                "thumb": "http://csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/75a48f/tic-tac-toe-game-in-C-Sharp/Images/TicTacToe_HD_iTunesArtwork.png",
                "title": "Tic Tac Toe"
            },
            {
                "id": 2,
                "thumb": "https://camo.githubusercontent.com/8e5cd9508250cb54ecdb6d504c2706b51db2b706/687474703a2f2f636f6e74656e742e73637265656e636173742e636f6d2f75736572732f746f67616b616e6761726f6f2f666f6c646572732f4a696e672f6d656469612f65353438366633622d363038662d343364392d396135352d3737356464646135623732372f323031352d30342d31385f313134342e706e67",
                "title": "Hangman"
            },
            {
                "id": 3,
                "thumb": "https://s-media-cache-ak0.pinimg.com/originals/a8/28/8c/a8288c58c8965763243a720f8abf847d.jpg",
                "title": "Random Card"
            },
            {
                "id": 4,
                "thumb": "http://aptdesignonline.com/wp-content/uploads/Beautiful-Wordpress-Website-121.jpg",
                "title": "WordPress Website"
            },
            {
                "id": 5,
                "thumb": "http://aptdesignonline.com/wp-content/uploads/Beautiful-Wordpress-Website-121.jpg",
                "title": "WordPress2 Website"
            }
        ]

## Project Collection [/project/{project_id}]

+ Parameters
    + project_id (number) - ID of the project

### Get one project [GET]

You are able to get just one particularproejct if you want.

+ Response 201 (application/json)

    + Headers

            Location: /project/3

    + Body

            {
                "id": 3,
                "title": "The Amazin Project",
                "categroy": "Websites",
                "thumb": "https://json-generator-alesanchezr.c9users.io/assets/bg/1.jpg",
                "description": "No project is more amazing that this one. Believe me.",
                "images": [
					"https://source.unsplash.com/category/nature/400x300",
					"https://source.unsplash.com/category/nature/400x300",
					"https://source.unsplash.com/category/nature/400x300",
					"https://source.unsplash.com/category/nature/400x300"
				],
                "images": [
					"http://www.4geeksacademy.com"
				]
            }