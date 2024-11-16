const { Sequelize } = require('sequelize')

// require config folder and file
const config = require('../config/config')[process.env.NODE_ENV || "development"]

// create connection with sequelize (orm) and database
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    logging: config.logging
})

// this will create new instance of sequelize to interact with the postgress database.
// this things menstion in the config/config.js file