const express = require('express')
const router = express.Router()
const {getAllPost} = require("../controllers/postsController")
const {createPost} = require("../controllers/postsController")
const {updatePost, deletePost} = require("../controllers/postsController")

router.get("/", getAllPost)
router.post("/create",createPost)
router.put("/create", updatePost)
router.delete("/create", deletePost)

module.exports = router