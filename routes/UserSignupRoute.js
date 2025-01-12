const express = require("express")
const route = express.Router()
const UserSignupController = require('../controller/UserSignupController')

route.post("/",UserSignupController.createUser)
route.get('/',UserSignupController.gettuser)
route.put('/',UserSignupController.updateUser)
route.delete('/',UserSignupController.deleteUser)

module.exports = route