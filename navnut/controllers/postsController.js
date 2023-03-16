const postModel = require("../models/postModels")

const getAllPost = async(req, res) => {
    const post = await postModel.getAllPostFromDB()
    res.send(post)
}
const createPost = async(req, res) => {
    const { img_url, post_title, post_date, post_message } = req.body;
    const post = await postModel.addPostToDB(img_url, post_title, post_date, post_message)
    res.send(post)
}
const updatePost = async(req, res) => {
    //console.log(req.body)
    console.log("ITS ME!!!!!!!!!!!!!!!!!!!")
    const { post_id, post_title, post_message ,img_url} = req.body;
    const post = await postModel.updatePostToDB(post_id, post_title, post_message, img_url)
    res.send(post)
}
const deletePost = async(req, res) => {
    const { post_id } = req.body;
    const post = await postModel.DeletePostInDB(post_id)
    res.send(post)
}
const getUpdatedPost = async(req, res) => {
    const  post_id  = req.params.post_id;
    const post = await postModel.getSpecificPostFromDB(post_id)
    res.send(post)
}

// conxt getUsersByID = await 
module.exports = {
    getAllPost,
    createPost,
    updatePost, 
    deletePost,
    getUpdatedPost
}