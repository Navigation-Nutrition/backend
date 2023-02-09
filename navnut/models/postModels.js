const pool = require("../db")

class postModel {
  static async getAllPostFromDB(){
    const query = await pool.query("SELECT * FROM post")
    console.log(query)
    return query.rows 
  }
}

module.exports = postModel