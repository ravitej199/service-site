import Contact from "../models/contact-model.js";


const contactForm = async (req, res)=>{
try{

    const response = req.body;
    let created = await Contact.create(response);
    if(created){
        return res.status(200).json({message : " Message sent successfully"})
    }

}
catch(error){
   return res.status(500).json({message:"message not delivered"});
}

}

export default contactForm;