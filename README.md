# [speedrun.js](https://speedrun.js.org)

speedrun.com API library for Node.js apps

[![NPM](https://nodei.co/npm/speedrun.js.png?downloads=true&stars=true)](https://npmjs.org/speedrun.js)

[![GitHub issues](https://img.shields.io/github/issues/GreepTheSheep/speedrun.js?color=orange&logo=github)](https://github.com/GreepTheSheep/speedrun.js/issues) [![GitHub forks](https://img.shields.io/github/forks/GreepTheSheep/speedrun.js?logo=github)](https://github.com/GreepTheSheep/speedrun.js/network) [![GitHub stars](https://img.shields.io/github/stars/GreepTheSheep/speedrun.js?logo=github)](https://github.com/GreepTheSheep/speedrun.js/stargazers)

![GitHub package.json version](https://img.shields.io/github/package-json/v/GreepTheSheep/speedrun.js?logo=npm) ![npm](https://img.shields.io/npm/dm/speedrun.js?logo=npm) [![Depfu](https://badges.depfu.com/badges/8fee0e78566b9755ff29b80e1429a1b6/overview.svg)](https://depfu.com/github/GreepTheSheep/speedrun.js?project_id=17774)

[![Build Status](https://travis-ci.com/GreepTheSheep/speedrun.js.svg?branch=main)](https://travis-ci.com/GreepTheSheep/speedrun.js)

## Installation

```text
npm i speedrun.js
```

## Usage

This following example uses async/await, you can also use .then\(\)

```javascript
// Import the module:
const speedrun = require("speedrun.js");

async function speedrunJsExamples(){
    var out;

    // Get game information:
    out = await speedrun.games.getGameByAbbreviation('hl2')
    console.log(out.names.international) // hl2 will output Half-Life 2

    // Search games and get information
    out = await speedrun.games.getGamesByName('Watch Dogs')
    console.log(out) // This will output an array of information containing Watch Dogs in the name
}

speedrunJsExamples()
```

Refer to the [examples dir](https://github.com/GreepTheSheep/speedrun.js/tree/main/examples) for more examples

## Checklist to do
- [ ] Finish API (get anything with functions)
- [ ] Documentate as fast as possible
- [ ] Logo for the Readme and for the website
- [ ] ~~Beat [node-speedrun](https://github.com/SwitchbladeBot/node-speedrun)'s PB~~ (jk, you can use this lib while I make mine)
