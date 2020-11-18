const speedrun = require('../src/index.js')

speedrun.games.getGameByAbbreviation('sm64').then(out=>{
    console.log(out.names.international, out) // enjoy!
})

speedrun.games.getGamesByName('Watch Dogs').then(out=>{
    console.log(out) // This will output all games containing Watch Dogs in the name
})