const speedrun = require('../')

speedrun.games.getGameByAbbreviation('hl2').then(out=>{
    console.log(out.names.international) // hl2 will output Half-Life 2
})

speedrun.games.getGamesByName('Watch Dogs').then(out=>{
    console.log(out) // This will output all games containing Watch Dogs in the name
})