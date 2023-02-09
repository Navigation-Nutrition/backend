const express = require('express')
const router = express.Router()
const { getAllUsers } = require("../controllers/usersController")
const { getUsersByID } = require("../controllers/usersController")
const { getUsersFriendsByID } = require("../controllers/usersController")
const { postUserInfo } = require("../controllers/usersController")


router.get("/", getAllUsers)
router.get("/:userID", getUsersByID)
router.get("/:userID/friends", getUsersFriendsByID)
router.post("/",postUserInfo)

module.exports = router
