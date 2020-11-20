/**
 * Get game World Record
 * @param {String} user - User ID you want to get the information from
 * @returns {Promise <pending>} - Returned pending promise
*/
module.exports = async function(user){
    try{
        const fetch = require('node-fetch')
        const SPRoptions = require('../../options.json')
        const apiLink = SPRoptions.url + SPRoptions.apiLink + 'v' + SPRoptions.apiVersion + '/users/' + user
    
        var res = await fetch(apiLink,{headers: { 'User-Agent': SPRoptions.agent }})
        res = await res.json()
        res = Object(res.data)
        
        return res
    } catch (err) {
        throw err
    }
}