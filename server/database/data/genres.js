const data = require('./ign.js')

const genres = data.map((game) => {
  return {
    id: game.id,
    genre: game.genre
  }
})
module.exports = genres

