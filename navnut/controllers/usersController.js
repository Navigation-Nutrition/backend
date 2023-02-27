const usersModel = require("../models/usersModels")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

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
console.log('hello')
const postUserInfo = async (req, res) => {
  const { first_name, last_name, user_name, password, email } = req.body;
  // console.log({ first_name, last_name, user_name, password, email })
  let hashedPassword = bcrypt.hashSync(password, 10)
  const user = await usersModel.postUserToDB(first_name, last_name, user_name, hashedPassword, email)
  const insertedUser = user.rows
  if (user) {
    res.send(insertedUser)
  } else {
    res.status(401).send('User not found')
  }
}





const logInUser = async (req, res) => {
  //console.log(req.body)
  try {
    let { user_name, password } = req.body
    const foundUser = await usersModel.loginUser(user_name, password)
    console.log(foundUser)
    const token = jwt.sign({ id: foundUser[0].user_id }, 'hello moto');
    console.log(token)

    if (foundUser && bcrypt.compareSync(password, foundUser[0].password)) {
      res.send({token, foundUser})
    } else {
      res.status(401).send("invalid username or password")
    }
  } catch (error) {
    // console.error(error);
    res.status(404).send(error)
  }

}

module.exports = {
  getAllUsers,
  getUsersByID,
  getUsersFriendsByID,
  postUserInfo,
  logInUser
}