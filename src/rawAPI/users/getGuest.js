/**
 * This will retrieve a guest, identified by their name.
 * @param {String} guest - Guest name you want to get the information from (Case sensitive)
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(guest){
    const fetch = require('node-fetch')
    const SPRoptions = require('../../options.json')
    const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/guests/' + guest

    var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
    res = await res.json()
    res = Object(res.data)
    
    return res
}