const postModel = require("../models/postModels")

const getAllPost = async(req, res) => {
    const post = await postModel.getAllPostFromDB()
    res.send(post)
}
const createPost = async(req, res) => {
    const { post_message } = req.body;
    const post = await postModel.addPostToDB(post_message)
    res.send(post)

}
// conxt getUsersByID = await 
module.exports = {
    getAllPost,
    createPost
}