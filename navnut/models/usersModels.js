const pool = require("../db")

class usersModel {
  static async getAllUsersFromDB(){
    const query = await pool.query("SELECT * FROM users")
    //console.log(query, "ALL DB")
    return query.rows 
  }
  static async getUserIdFromDB(userID){
    let query = await pool.query("SELECT * FROM users WHERE user_id = $1", [userID])
    console.log(query, "USER ID DB")
    return query.rows[0]
  }
  static async getUsersFriendsFromDB(userID){
    const query = await pool.query("SELECT * FROM users JOIN friends ON friends.friends_id = users.user_id WHERE friends.user_id = $1", [userID])
    console.log(query)
    return query.rows[0]
  }
}

module.exports = usersModel