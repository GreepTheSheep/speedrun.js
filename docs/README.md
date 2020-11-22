# Home

## Welcome to speedrun.js !

\_\_Welcome to the [speedrun.js](https://github.com/GreepTheSheep/speedrun.js) official documentation.\_\_ This module is a powerful [Node.js](https://nodejs.org/) module that allows you to easily interact with the [Speedrun.com API](https://speedrun.com/).

* Object oriented
* You can interact with anything
* Fast and simple

### Installation

**Node.js 12 or newer is recommended.**

\`npm install speedrun.js\`

### Example usage

```javascript
const Speedrun = require('speedrun.js')

const spr = Speedrun.raw

// Get informations on a game by their abbreviation
spr.games.getGame('hl2').then(out=>{
    console.log(out); // This will output indormation about Half-Life 2
});

// Get list of games and their information by their search
spr.games.searchGames('Watch Dogs').then(out=>{
    console.log(out) // This will output all games containing Watch Dogs in the name
});

// Get informations of a registered user
spr.users.getUser('Greep').then(out=>{
    console.log(out)
});

// Get latest runs (PB) done by this registered user
spr.users.getPB('Greep').then(out=>{
    console.log(out) 
})

// Get World Record
spr.leaderboard.getWR('smb', 'any%').then(out=>{
    console.log(out) // This will output the informations of the WR any% of Super Meat Boy (and not Super Mario Bros)
})
```

More examples are on our [examples directory](https://github.com/GreepTheSheep/speedrun.js/tree/main/examples).

### Links

* Website
* Source code \(module and website\)
* NPM package

### Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check this documentation.

If you want to make a PR, please test it using ESLint or running a example before creating this PR. Thanks!

### Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to create a [issue](https://github.com/GreepTheSheep/speedrun.js/issues).



