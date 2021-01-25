/**
 * Search games
 * @param {String} game - Game name you want to search
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(game){
    const fetch = require('node-fetch')
    const SPRoptions = require('../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/games?name=' + game.split(' ').join('%20')

    var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
    res = await res.json()
    res = Object(res.data)

    return res
}