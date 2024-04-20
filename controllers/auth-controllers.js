import User from "../models/user-model.js";
import bcrypt from 'bcrypt';
const home = async (req,res) =>{

    try{
        res.status(200).send("home page");
    }
    catch(error){
        console.log(error);
    }
}
const register = async (req,res) =>{

    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body;
       
        const userExist = await User.findOne({email})
        if(userExist){
          return  res.status(400).json({ message : "User already exists"});
        }

      const saltRound = 10;
      const hash_pswd = await bcrypt.hash(password,saltRound);
      let userCreated =   await User.create({ username, email, phone, password : hash_pswd})

        res.status(201).json({msg: "Registration Successful", token : await userCreated.generateToken(), userId : userCreated._id.toString() });
    }
    catch(error){
        res.status(500).json({msg: "internal  server error"});
    }
    }

const login = async (req,res) =>{
    try{

        const {email, password} = await req.body;
        const userExist = await User.findOne({email})
        if(userExist){
            console.log("userExist: "+  userExist)
            console.log(password)

            const match = await bcrypt.compare(password,userExist.password)
            console.log(match)
            if(match){
                res.status(200).json({message : "Login successful", token : await userExist.generateToken(),userId : userExist._id.toString()});
            }else{
                res.status(401).json({message : "Invalid username or password"});
            }
        }
        else{
            return res.status(400).json({message:"Invalid credentials"})
        }


    }
    catch(error){
        // res.status(500).json("Internal server error")
      console.log(error); 
    }
}


const user = async(req,res)=>{
    try{
        const userData = req.user;
        console.log(userData);
       return res.status(200).json({userData});
    }
    catch(error){
        console.log(error);
    }

}

export default {home,register,login,user};