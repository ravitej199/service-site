import serviceModel from "../models/service-model.js"

const services = async(req,res)=>{
    try{
        const response = await serviceModel.find();
        if(!response){
            return res.status(404).json({msg:"No services found"});
        }

        return res.status(200).json({data:response})
    }
    catch(error){
        console.log(error)

    }
}

export default services;