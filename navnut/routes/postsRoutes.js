const express = require('express')
const router = express.Router()
const {getAllPost} = require("../controllers/postsController")
const {createPost} = require("../controllers/postsController")

router.get("/", getAllPost)
router.post("/create",createPost)
// router.put("/",createPost)
// router.delete("/",createPost)

module.exports = router