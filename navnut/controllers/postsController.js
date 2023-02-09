const postModel = require("../models/postModels")

const getAllPost = async(req, res) => {
    const post = await postModel.getAllPostFromDB()
    res.send(post)
}
module.exports = {
    getAllPost
}