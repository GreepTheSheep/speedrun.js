/**
 * Get game informations
 * @param {String} game - Game ID or abbreviation you want to get the infos from
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(game){
    const fetch = require('node-fetch')
    const SPRoptions = require('../../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/games/' + game

    var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
    res = await res.json()
    res = Object(res.data)

    return res
}