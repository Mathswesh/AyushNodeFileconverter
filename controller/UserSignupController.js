const UserSignupModel = require('../models/UserSignupModel');

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        // create user
        const createUser = await UserSignupModel.create(req.body);
        console.log(createUser);
        res.status(200).json({
            message: "User Signup Done.",
            data: createUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error User Signup Fail.",
            error: error.message
        });
    }
};

const gettuser = async (req, res) => {
    try {
        const gettuser = await UserSignupModel.find();
        res.status(200).json({
            message: "User Signup data Done.",
            data: gettuser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error User Signup data fail.",
            error: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id  = req.params;
        const deletedUser = await UserSignupModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found."
            });
        }
        res.status(200).json({
            message: "User deleted successfully.",
            data: deletedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting user.",
            error: error.message
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserSignupModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found."
            });
        }
        res.status(200).json({
            message: "User updated successfully.",
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating user.",
            error: error.message
        });
    }
};

module.exports = { createUser, gettuser, deleteUser, updateUser };

// const UserSignupModel = require('../models/UserSignupModel')
// const createUser = async(req,res) => {
//     try {
//         console.log(req.body)
//         // create user
//         const createUser = await UserSignupModel.create(req.body) 
//         console.log(createUser)
//         res.status(200).json({
//             message:"User Signup Done.",
//             data:createUser
//         })
//     } catch (error) {
//         res.status(500).json({
//             message:"Error User Signup Fail.",
//         })
//     }
// }
// const gettuser = async (req,res) => {
//     try {
//         const gettuser = await  UserSignupModel.find()
//         res.status(200).json({
//             message:"User Signup data Done.",
//             data:gettuser
//         })
//     } catch (error) {
//         res.status(500).json({
//             message:"Error User Signup data fail.",
//         })
//     }
// }
// module.exports = {createUser , gettuser}