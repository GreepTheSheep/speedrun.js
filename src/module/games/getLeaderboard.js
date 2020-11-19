/**
 * Get game leaderboard
 * @param {String} game - Game ID you want to get the leaderboard from
 * @param {String} category - Category ID you want to get the leaderboard from
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(game, category){
    const fetch = require('node-fetch')
    const SPRoptions = require('../../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/leaderboards/' + game + '/category/' + category.replace('%', '')

    var res = await fetch(apiLink)
    res = await res.json()
    res = Object(res.data)

    return res
}