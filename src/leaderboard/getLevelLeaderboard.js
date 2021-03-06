/**
 * Get game leaderboard
 * @param {String} game - Game ID you want to get the leaderboard from
 * @param {String} level - Level ID you want to get the leaderboard from
 * @param {String} category - Category ID you want to get the leaderboard from
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(game, level, category){
    const fetch = require('node-fetch')
    const SPRoptions = require('../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/leaderboards/' + game + '/level/' + level + '/' + category.replace('%', '').split(' ').join('%20')

    var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
    res = await res.json()
    res = Object(res.data)

    if (res.runs == undefined) throw "Error: Level or Category of the game \""+game+"\" is not found"
    return res
}