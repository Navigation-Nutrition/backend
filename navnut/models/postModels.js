const pool = require("../db")

class postModel {
  static async getAllPostFromDB(){
    const query = await pool.query("SELECT * FROM post")
    console.log(query)
    return query.rows 
  }
  // static async addPostToDB(post_date, post_message){
  //   const query = await pool.query('INSERT INTO users (post_date, post_message) VALUES ($1, $2) RETURNING *', [, post_message])
  //   console.log(query)
  //   return query.rows 
  // }

}

module.exports = postModel