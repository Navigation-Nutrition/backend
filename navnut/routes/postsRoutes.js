const express = require('express')
const router = express.Router()
const {getAllPost} = require("../controllers/postsController")
//const {getAllPost} = require("../controllers/postsController")

router.get("/", getAllPost)
router.post("/:userID", )

module.exports = router