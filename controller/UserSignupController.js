const UserSignupModel = require('../models/UserSignupModel')
const createUser = async(req,res) => {
    try {
        console.log(req.body)
        // create user
        const createUser = await UserSignupModel.create(req.body) 
        console.log(createUser)
        res.status(200).json({
            message:"User Signup Done.",
            data:createUser
        })
    } catch (error) {
        res.status(500).json({
            message:"Error User Signup Fail.",
        })
    }
}
const gettuser = async (req,res) => {
    try {
        const gettuser = await  UserSignupModel.find()
        res.status(200).json({
            message:"User Signup data Done.",
            data:gettuser
        })
    } catch (error) {
        res.status(500).json({
            message:"Error User Signup data fail.",
        })
    }
}
module.exports = {createUser , gettuser}