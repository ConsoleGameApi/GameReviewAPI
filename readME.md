To see our documentation please visit: https://gamereviewdocs.herokuapp.com/

![schema design](https://github.com/ConsoleGameApi/GameReviewAPI/blob/dev/GamesReviewAPI_Schema.png)

This API contains 18k rows of data from ign game reviews.

#### Tools Used:


* [Babel](https://babeljs.io/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Knex](http://knexjs.org/)

#### Wanna contribute to GameReviewAPI?

1. Fork the repo
2. Clone down to your local machine.
3. cd into the repo and open a terminal window
4. Run npm install
5. Open a terminal window and run ```webpack -w```
6. Open another terminal window and run ```nodemon server/server.js or npm start(if you are on linux/mac```
7. Open your browser and navigate to localhost:8080
8. Code!
9. Commit changes and make a pull request

File structure:
```
├── GamesReviewAPI_Schema.png
├── directory.txt
├── index.html
├── knexfile.js
├── package.json
├── readME.md
└── server
    ├── controllers
    │   └── search
    │       ├── search.game.controller.js
    │       ├── search.genre.controller.js
    │       └── search.platform.controller.js
    ├── database
    │   ├── data
    │   │   ├── ign.js
    │   │   └── oldSearchGameModel.js
    │   ├── db.js
    │   ├── model
    │   │   ├── add.game.model.js
    │   │   ├── add.game2Genre.model.js
    │   │   ├── add.game2Platform.model.js
    │   │   ├── add.genre.model.js
    │   │   └── add.platform.model.js
    │   └── seeding
    │       ├── game.controller.js
    │       ├── game2Genre.controller.js
    │       ├── game2Platform.controller.js
    │       ├── genre.controller.js
    │       ├── init.controller.js
    │       └── platform.controller.js
    ├── helpers
    │   └── search
    │       ├── search.game.helper.js
    │       ├── search.genre.helper.js
    │       └── search.platform.helper.js
    ├── index.js
    ├── middlewares
    │   └── application.js
    ├── models
    │   └── search
    │       ├── search.game.model.js
    │       ├── search.genre.model.js
    │       └── search.platform.model.js
    ├── routers
    │   ├── api
    │   │   └── search.router.js
    │   └── database.router.js
    └── server.js
    ```
