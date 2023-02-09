const pool = require("../db")

class usersModel {
  static async getAllUsersFromDB(){
    const query = await pool.query("SELECT * FROM users")
    //console.log(query, "ALL DB")
    return query.rows 
  }
  static async getUserIdFromDB(userID){
    let query = await pool.query("SELECT * FROM users WHERE user_id = $1", [userID])
    //console.log(query, "USER ID DB")
    return query.rows[0]
  }

}

module.exports = usersModel