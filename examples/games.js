const spr = require('../')

spr.games.getGame('hl2').then(out=>{
    console.log(out.names.international) // hl2 will output Half-Life 2
})

spr.games.searchGames('Watch Dogs').then(out=>{
    console.log(out) // This will output all games containing Watch Dogs in the name
})

spr.games.getCategories('smb1').then(out=>{
    console.log(out) // This will output all category of speedrunning in game leaderboard
})

// Mini-tutorial: get list of categories with their ID and the link to access to
spr.games.getCategories('sm64').then(out=>{
    out.forEach(cat=>{
        console.log(cat.name, cat.id, cat.weblink)
    })
})

spr.games.getLevels('smb1').then(out=>{
    console.log(out) // This will output all levels of speedrunning in level leaderboard
})

spr.games.getDerivedGames('smb1').then(out=>{
    console.log(out) // This will output all Derived Games (ROM hacks mostly)
})