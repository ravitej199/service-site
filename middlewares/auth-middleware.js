import jwt from 'jsonwebtoken';
import User from "../models/user-model.js";
const authMiddleware = async (req,res,next) =>{
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({message: "Unauthorized HTTP, Token not provided"});
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try{

        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        if(isVerified){
            const userData = await User.findOne({email:isVerified.email});
            req.user = userData;
            req.token = token;
            req.userID = userData._id; 
        }
        next();

    }catch(error){
        console.log(error);

    }

}

export default authMiddleware;