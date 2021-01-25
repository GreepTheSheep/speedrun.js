/**
 * Get game World Record
 * @param {String} user - User ID or screen name you want to get the information from
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(user){
    const fetch = require('node-fetch')
    const SPRoptions = require('../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/users/' + user + '/personal-bests'

    var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
    res = await res.json()
    res = Object(res.data)
    
    return res
}