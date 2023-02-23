const express = require("express")
const app = express()
const port = process.env.port || 8000 
const userRouter = require("./routes/usersRoutes")
const postRouter = require("./routes/postsRoutes")
var cors = require('cors')

app.use(express.json()); 
app.use(cors())

app.use("/users", userRouter)
app.use("/post", postRouter)


app.listen(port, function(){
  console.log("Server started on port: ", port);
})

// const robotRouter = require("./routers/robotRouter")

