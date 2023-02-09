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
    const query = await pool.query("SELECT * FROM users JOIN friends ON friends.friend_id = users.user_id WHERE friends.user_id = $1", [userID])
    console.log(query)
    return query.rows
  }
  static async postUserToDB(first_name,last_name,user_name,password,email){
    const query = await pool.query('INSERT INTO users(first_name,last_name,user_name,password,email) VALUES($1, $2, $3, $4, $5) RETURNING *',[first_name,last_name,user_name,password,email])
    return query
  }
}

module.exports = usersModel