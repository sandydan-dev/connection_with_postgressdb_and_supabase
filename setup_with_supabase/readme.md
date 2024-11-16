# create basic api

## Install neccessary package
- using npm init -y to create a new package.json file
- using npm install express cors sequlize pg dotenv and dev dependencies like nodemon sequlize-cli
- after installing the packages, we can start creating the api
- create a new file called index.js and add the following code
- after initialize the sequelize-cli using npx sequelize-cli init, it create folders like models, migrations, seeders, config, for our database, we can create a new file called config.json and add the following code
- we can use the sequelize-cli to create the database tables using the following command npx sequelize-cli


## Start with file - config/confi.json but we will remove json extension, and use js file extension instead of json

- remove testing for now , we will add it later
- Now require dotenv file to use the key of supabase 
- and also export it using module.export so we can use it in other file

- write like this supabase connection

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_NAME,
    logging: false
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_NAME,
    logging: false
  }
}



## Next step is create a new file name is lib/sequelize.js 
- require the config file and export the sequelize instance and along with config file add [process.env.NODE_ENV || "development"] , we want to use this config file in other file, 

- also require the sequelize 


## In the lib/sequelize.js file create a connection with sequelize supabase database using the following code
const { Sequelize } = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host : config.host,
    dialect: config.dialect,
    port : config.port,
    logging: config.logging
});

-- this will create new sequelize instance to interact with the postgres database.