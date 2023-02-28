const express = require('express')
const router = express.Router()
const {getAllPost} = require("../controllers/postsController")
const {createPost} = require("../controllers/postsController")

router.get("/", getAllPost)
router.post("/",createPost)

module.exports = router