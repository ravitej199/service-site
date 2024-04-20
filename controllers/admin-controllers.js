import User from "../models/user-model.js"
import Contact from "../models/contact-model.js";
const getAllUsers = async(req,res) =>{
try {
    const users = await User.find({},{password : 0});
if(!users || users.length === 0){
    return res.status(404).json({message : "No users found"});
}
return res.status(200).json(users);
} catch (error) {
   console.log(error)
}
}


const getAllContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find({});
    if(!contacts || contacts.length === 0){
        return res.status(404).json({message : "No Contacts found"});
    }
    return res.status(200).json(contacts);
    } catch (error) {
       console.log(error)
    }

}

export default {getAllUsers, getAllContacts};