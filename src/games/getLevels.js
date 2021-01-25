/**
 * Get speedrunning levels of this game
 * @param {String} game - Game ID or abbreviation you want to get the levels from
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(game){
    const fetch = require('node-fetch')
    const SPRoptions = require('../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/games/' + game + '/levels'

    var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
    res = await res.json()
    res = Object(res.data)

    return res
}