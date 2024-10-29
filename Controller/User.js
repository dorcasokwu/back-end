const asyncHandler = require ("express-async-handler");
const bcrypt = require ("bcryptjs")
const user=require("../schema/User")

const getAllusers = asyncHandler(async(req,res)=>{
    const {title,body}=req.body
    try {
        
    } catch (error) {
        
    }
});
const CreateNewUSER = asyncHandler(async(req, res)=>{
    const {nme, username, email, phone, password}=req.body
    try {
        const userExist = await user.findone({
            username, email
        });
        if (userExist){
            res.status(506).json({
                message: "User already Exist",
            });
        }
        const creat =await User.create({
            name,
            username,
            email,
            phone,
            password,
        });
        res.status(200).json({message: "post successful", create});
    } catch (error) {
        res.status(401).json({
            message: "unable to create post",
            error,
        });
    }
});
const login = asyncHandler(async(req,res)=>{
    const {username, password}=req.body;
    try {
        const loginUser = await UserActivation.findone({
            username
        });
        if (!loginUser){
            res.status(709).json({
                message: "No Username found",
            });
        }
        const passworMatch = await bcrypt.compare
        (password, loginUser.password);
        if (!passwordMtch){
            res.status(890).json({
                message: "wrong password"
            });
        }
        res.status(200).json({
            message: "Login successful",
            loginUser,
        });
    } catch (error) {
        res.status(401).json({
            message: "invalid User",
            error,
        });
        
    }
});



module.exports = {CreateNewUser, Login};