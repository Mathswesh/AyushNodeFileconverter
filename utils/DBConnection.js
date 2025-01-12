// npm install mongoose
const mongoose = require("mongoose")

const dbconnection = async() =>{
    const connection = await mongoose.connect("mongodb://localhost:27017/fileConverter")
    console.log("Db is connected.")
    return connection
}
module.exports=dbconnection