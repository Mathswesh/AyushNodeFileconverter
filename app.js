// step -1
// npm init
// npm install nodemon
// npm install express

const express = require("express")
const PORT = 3000
const app = express(express.json());
app.use(express.urlencoded({ extended: true }));


// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT,(req,res)=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})

// step-2

const dbconnection = require("./utils/DBConnection")
dbconnection()

// step-3 
// create model and then store variables in it

// step-4
// create controller and then generate methods in it

// step-5 
// create router and manage route in it

// step-6
const userSignupRoute = require('./routes/UserSignupRoute')
app.use("/usersignup",userSignupRoute)