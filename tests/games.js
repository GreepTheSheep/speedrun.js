const speedrun = require('../')

speedrun.games.getGameByAbbreviation('hl2').then(out=>{
    console.log(out.names.international) // hl2 will output Half-Life 2
})

speedrun.games.getGamesByName('Watch Dogs').then(out=>{
    console.log(out) // This will output all games containing Watch Dogs in the name
})

speedrun.games.getLevels('smb1').then(out=>{
    console.log(out) // This will output all levels of speedrunning in level leaderboard
})

speedrun.games.getDerivedGames('smb1').then(out=>{
    console.log(out) // This will output all Derived Games (ROM hacks mostly)
})

speedrun.games.getLeaderboard('wd2', 'Any%').then(out=>{
    console.log(out)
})

speedrun.games.getWR('smb1', 'any%').then(out=>{
    console.log(out)
})