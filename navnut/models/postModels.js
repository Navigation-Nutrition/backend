const pool = require("../db")

class postModel {
  static async getAllPostFromDB(){
    const query = await pool.query("SELECT * FROM post")
    console.log(query)
    return query.rows 
  }
  static async addPostToDB(img_url, post_title, post_date, post_message){
    const query = await pool.query("INSERT INTO post (img_url, post_title, post_date, post_message) VALUES ($1,$2,$3,$4) RETURNING *", [img_url, post_title, post_date, post_message])
    console.log(query)
    return query.rows 

  }
  static async updatePostToDB(post_id, post_title, post_message, img_url){
    console.log(post_id, "IT ME!!!!!!!!")
    const query = await pool.query("UPDATE post SET post_title = $2, post_message = $3, img_url = $4 WHERE post_id = $1 RETURNING *",[post_id, post_title, post_message, img_url])
    //console.log(query.length)
    return query.rows[0]
  }
  static async DeletePostInDB(post_id){
    const query = await pool.query("DELETE FROM post WHERE post_id = $1 RETURNING *",[post_id])
    console.log(query)
    return query.rows 
  }
  static async getSpecificPostFromDB(post_id){
    console.log(post_id)
    const query = await pool.query("SELECT * FROM post WHERE post_id = $1",[post_id])
    console.log(query)
    return query.rows[0]
  }

}

module.exports = postModel