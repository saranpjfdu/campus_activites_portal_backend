const { get_query_database,post_query_database } = require("../config/database_utils")

const get_master_users = async(req, res) =>{
    try {
        const query = `SELECT id, user_name, password, user_role 
        FROM users`
        const data = await get_query_database(query)
        res.status(200).json(data)
    } catch (err) {
        console.error("Error fetching available:",err)
        res.status(500).json({
            error: "Error fetching available"
        })
    }
}
module.exports = { get_master_users };