const data = require('./ign.js')

const games = data.map((game) => {
  if (game.editors_choice === 'Y') {
    game.editors_choice = 1
  }  else if (game.editors_choice === 'N') {
    game.editors_choice = 0
  }
  return {
    id: game.id,
    score_phrase: game.score_phrase,
    title: game.title,
    url: game.url,
    score: game.score,
    editors_choice: game.editors_choice,
    release_year: game.release_year,
    release_month: game.release_month,
    release_day: game.release_day
  }
})

module.exports = games

