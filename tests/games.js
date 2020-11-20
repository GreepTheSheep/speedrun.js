const speedrun = require('../')

speedrun.games.getGameByAbbreviation('hl2').then(out=>{
    console.log(out.names.international) // hl2 will output Half-Life 2
})

speedrun.games.getGamesByName('Watch Dogs').then(out=>{
    console.log(out) // This will output all games containing Watch Dogs in the name
})

speedrun.games.getCategories('smb1').then(out=>{
    console.log(out) // This will output all category of speedrunning in game leaderboard
})

// Mini-tutorial: get list of categories with their ID and the link to access to
speedrun.games.getCategories('sm64').then(out=>{
    out.forEach(cat=>{
        console.log(cat.name, cat.id, cat.weblink)
    })
})

speedrun.games.getLevels('smb1').then(out=>{
    console.log(out) // This will output all levels of speedrunning in level leaderboard
})

speedrun.games.getDerivedGames('smb1').then(out=>{
    console.log(out) // This will output all Derived Games (ROM hacks mostly)
})