const speedrun = require('../')

speedrun.users.getUser('Greep').then(out=>{
    console.log(out)
})

speedrun.users.getPB('Greep').then(out=>{
    console.log(out) // Output latest runs (PB) done by this user
})

speedrun.users.getRuns('Greep').then(out=>{
    console.log(out) // Output all runs (including old PBs) done by this user
})

speedrun.users.getGamesModered('Greep').then(out=>{
    console.log(out) // Output all games modered by this user
})