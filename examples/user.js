const Speedrun = require('../')

const spr = Speedrun.raw

spr.users.getUser('Greep').then(out=>{
    console.log(out)
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