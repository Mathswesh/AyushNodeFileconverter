
const mongoose = require('mongoose')

const userSignupSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    firstname:{
        type:String,
        // required: [true,"Name is Compulsory."]
    },
    email:{
        type:String,
        // required: [true,"Name is Compulsory."]
    },
    password:{
        type:String,
        // required: [true,"Name is Compulsory."]
    },
})
const user = mongoose.model('user', userSignupSchema)
module.exports=user