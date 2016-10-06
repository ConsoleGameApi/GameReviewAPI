var mysql = require('mysql');
var config = require(__dirname + '/../../knexfile.js')

var env = 'development'
var knex = require('knex')(config[env])

module.exports = knex;



knex.ensureSchema = function() {
  return Promise.all([
    knex.schema.hasTable('Platforms').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('Platforms', function(table) {
          table.increments('id').primary();
          table.string('console_name');
        }).then(function(table) {
          console.log('PlatformsTable has been created', table)
        })
      }
    }),
    knex.schema.hasTable('Genres').then(function(exists) {
      if (!exists) {
         knex.schema.createTable('Genres', function(table) {
          table.increments('id').primary();
          table.string('name');
        }).then(function(table) {
          console.log('Genres Table has been created', table)
        })
      }
    }),
    knex.schema.hasTable('Games').then(function(exists) {
      if (!exists) {
         knex.schema.createTable('Games', function(table) {
          table.increments('id').primary();
          table.string('title');
          table.string('url');
          table.string('score_phrase');
          table.boolean('editors_choice');
          table.integer('score').unsigned();
          table.integer('release_year').unsigned();
          table.integer('release_month').unsigned();
          table.integer('release_day').unsigned();
        }).then(function(table) {
          console.log('GamesTable has been created', table)
        })
      }
    }),
    knex.schema.hasTable('Games2Platforms').then(function(exists) {
      if (!exists) {
         knex.schema.createTable('Games2Platforms', function(table) {
          table.increments('id').primary();
          table.integer('game_id').unsigned();
          table.integer('platform_id').unsigned();
          table.foreign('game_id').references('Games.id');
          table.foreign('platform_id').references('Platforms.id');
        }).then(function(table) {
          console.log('Games2Platforms has been created', table)
        })
      }
    }),
    knex.schema.hasTable('Games2Genres').then(function(exists) {
      if (!exists) {
         knex.schema.createTable('Games2Genres', function(table) {
          table.increments('id').primary();
          table.integer('game_id').unsigned();
          table.integer('genre_id').unsigned();
          table.foreign('game_id').references('Games.id');
          table.foreign('genre_id').references('Genres.id');
        }).then(function(table) {
          console.log('Games2Genres has been created', table)
        })
      }
    })
    ])
}
