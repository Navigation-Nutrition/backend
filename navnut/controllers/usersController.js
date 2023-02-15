const usersModel = require("../models/usersModels")
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
  const users = await usersModel.getAllUsersFromDB()
  res.send(users)
}
const getUsersByID = async (req, res) => {
  // console.log(req.params)
  const userID = req.params.userID
  //console.log(`userID in controller is: ${userID}`)
  const user = await usersModel.getUserIdFromDB(userID)
  // console.log(`user is ${user}`)
  if (user) {
    res.send(user)
  } else {
    res.status(401).send('User not found')
  }
}
const getUsersFriendsByID = async (req, res) => {
  const userID = req.params.userID
  const user = await usersModel.getUsersFriendsFromDB(userID)
  if (user) {
    res.send(user)
  } else {
    res.status(401).send('User not found or has no friends')
  }
}
const postUserInfo = async (req, res) => {
  const {first_name,last_name,user_name,password,email} = req.body;
  let hashedPassword = bcrypt.hashSync(password, 10)
  const user = await usersModel.postUserToDB(first_name,last_name,user_name,hashedPassword,email)
  const insertedUser = user.rows
  if (user) {
    res.send(insertedUser)
  } else {
    res.status(401).send('User not found')
  }
}
const logInUser = async (req, res) => {
  console.log(req.body)
  let {user_name, password} = req.body 
  console.log(user_name, password)
  try{
    const createdUser = await usersModel.loginUser(user_name, password)
    res.send(createdUser)
  }catch(e){
    res.status(400).send(e)
  }
}

module.exports = {
  getAllUsers,
  getUsersByID,
  getUsersFriendsByID,
  postUserInfo,
  logInUser
}