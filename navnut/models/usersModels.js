const pool = require("../db")

class usersModel {
  static async getAllUsersFromDB(){
    const query = await pool.query("SELECT * FROM users")
    console.log(query)
    return query.rows 
  }
}

module.exports = usersModel