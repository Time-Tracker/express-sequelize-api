# Time Logger API

API for time tracker project using:-
* [Node.js](http://nodejs.org/)
* [MySql](http://www.mysql.com/)
* [Sequelize](http://sequelizejs.com/)
* [Express 4](http://expressjs.com/)
* [Moongoose](http://mongoosejs.com/index.html)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [MySql](http://www.mysql.com/) installed and running.

```sh
git clone https://github.com/tloger/express-sequelize-api.git # or clone your own fork
cd express-sequelize-api
npm install # Make sure you change database connection details in config file
node server.js
```

Your app should now be running on [http://localhost:8080](http://localhost:8080/)

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using this button.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Heroku, check out https://devcenter.heroku.com/
