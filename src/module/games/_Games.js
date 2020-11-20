const getGameByName = require('./getGamesByName');

module.exports = {
    getGameByAbbreviation: require('./getGameByAbbreviation'),
    getGamesByName: require('./getGamesByName'),
    getLevels: require('./getLevels'),
    getCategories: require('./getCategories'),
    getDerivedGames: require('./getDerivedGames')
}