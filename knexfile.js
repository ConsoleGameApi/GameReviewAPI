var path = require('path')
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'mysql.kanadachi.com', //or 127.0.0;.1
      user: process.env.db_username,
      password: process.env.db_password,
      database: 'gamesapi44',
      charset: 'utf8'
    },
    pool: {
      min: 0,
      max: 7
    }
  }
}