const data = require('./ign.js')

const platforms = data.map((game) => {
  return {
    id: game.id,
    console_name: game.platform
  }
})
module.exports = platforms

