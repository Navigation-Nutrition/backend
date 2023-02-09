const express = require('express')
const router = express.Router()
const {getAllPost} = require("../controllers/postsController")

router.get("/", getAllPost)

module.exports = router