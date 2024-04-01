const users = require("../models/usersModel");

// get all users
const getAllUser = async (req, res)=>{
    try {
        const userData = await users.find();
        res.status(200).json({
            message : "All Users",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

// get single user 
const getSingleUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const userData = await users.findOne({_id:id});
        res.status(200).json({
            message : "Single user",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

// create user 
const createUser = async (req, res)=>{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const newUser = new users({
            name,
            email
        })
        const userData = await newUser.save();
        res.status(200).json({
            message : "new user is created",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

// update user 
const updateUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const userData = await users.findByIdAndUpdate({_id:id})
        userData.name = name;
        userData.email = email;
        await userData.save();
        res.status(200).json({
            message : "Update uses data",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

// delete user 
const deleteUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const userData = await users.findByIdAndDelete({_id:id})
        res.status(200).json({
            message : "This user is deleted",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

module.exports = {getAllUser, getSingleUser, createUser, updateUser, deleteUser};
