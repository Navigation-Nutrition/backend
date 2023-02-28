const postModel = require("../models/postModels")

const getAllPost = async(req, res) => {
    const post = await postModel.getAllPostFromDB()
    res.send(post)
}
const createPost = async(req, res) => {
    const { post_title, post_date, post_message } = req.body;
    const post = await postModel.addPostToDB(post_title, post_date, post_message)
    res.send(post)
}
const updatePost = async(req, res) => {
    const { post_title, post_message } = req.body;
    const post = await postModel.updatePostToDB(post_title, post_message)
    res.send(post)
}
const deletePost = async(req, res) => {
    const { post_title, post_message } = req.body;
    const post = await postModel.DeletePostInDB(post_title, post_message)
    res.send(post)
}
// conxt getUsersByID = await 
module.exports = {
    getAllPost,
    createPost
}