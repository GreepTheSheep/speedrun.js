const Speedrun = require('../')

const spr = Speedrun.raw

spr.leaderboard.getLeaderboard('wd2', 'Any%').then(out=>{
    console.log(out)
})

spr.leaderboard.getWR('smb', 'any%').then(out=>{
    console.log(out)
})

// Mini-tutorial: get WR if the category is not any% (Because other names require ID)
// This works too with getLeaderboard
spr.games.getCategories('sm64').then(out=>{
    var catID = out.find(cat=>cat.name == '0 Star').id
    spr.leaderboard.getWR('sm64', catID).then(out=>{
        console.log('The World Record for the category 0 Star in SM64 is done in '+ out.times.primary_t + ' seconds')
        console.log(out.weblink)
    })
})