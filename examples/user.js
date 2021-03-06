const spr = require('../')

spr.users.getUser('Greep').then(out=>{
    console.log(out)
})

spr.users.getGuest('Alex').then(out=>{
    console.log(out) // Get someone called Alex who is not registered on speedrun.com
})

spr.users.getPB('Greep').then(out=>{
    console.log(out) // Output latest runs (PB) done by this user
})

spr.users.getRuns('Greep').then(out=>{
    console.log(out) // Output all runs (including old PBs) done by this user
})

spr.users.getGamesModered('Greep').then(out=>{
    console.log(out) // Output all games modered by this user
})