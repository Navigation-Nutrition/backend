const express = require('express')
const router = express.Router()
const {getAllUsers} = require("../controllers/usersController")
//const {getUsersByID} = require("../controllers/usersController")

//router.get("/", getUsersByID)
router.get("/", getAllUsers)

module.exports = router
