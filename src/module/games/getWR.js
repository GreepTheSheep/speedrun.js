/**
 * Get game World Record
 * @param {String} game - Game ID you want to get the World Record from
 * @param {String} category - Category ID you want to get the World Record from
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(game, category){
    const fetch = require('node-fetch')
    const SPRoptions = require('../../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/leaderboards/' + game + '/category/' + category.replace('%', '')

    var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
    res = await res.json()
    res = Object(res.data)

    return res.runs[0].run
}