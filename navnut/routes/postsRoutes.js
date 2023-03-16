const express = require('express')
const router = express.Router()
const {getAllPost} = require("../controllers/postsController")
const {createPost} = require("../controllers/postsController")
const {updatePost, deletePost, getUpdatedPost} = require("../controllers/postsController")

router.get("/", getAllPost)
router.get("/:post_id", getUpdatedPost)
router.post("/create",createPost)
router.put("/", updatePost)
router.delete("/create", deletePost)

module.exports = router