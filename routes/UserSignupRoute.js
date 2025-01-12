const express = require("express")
const route = express.Router()
const UserSignupController = require('../controller/UserSignupController')

route.post("/",UserSignupController.createUser)
route.get('/',UserSignupController.gettuser)

module.exports = route