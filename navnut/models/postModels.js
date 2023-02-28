const pool = require("../db")

class postModel {
  static async getAllPostFromDB(){
    const query = await pool.query("SELECT * FROM post")
    console.log(query)
    return query.rows 
  }
  static async addPostToDB(post_title, post_date, post_message){
    const query = await pool.query("INSERT INTO post (post_title, post_date, post_message) VALUES ($1,$2, $3) RETURNING *", [post_title, post_date, post_message])
    console.log(query)
    return query.rows 

  }
  // static async updatePostToDB(post_title, post_message){
  //   const query = await pool.query("UPDATE posts SET ")
  //   console.log(query)
  //   return query.rows 
  // }
  // static async DeletePostInDB(post_id){
  //   const query = await pool.query("DELETE FROM post WHERE id = post_id")
  //   console.log(query)
  //   return query.rows 
  // }


}

module.exports = postModel