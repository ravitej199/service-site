
const validate = (schema) => async (req,res,next) =>{
    try{

        const parseBody = await schema.parseAsync(req.body);
        req.body =parseBody;
        next();
    }
    catch(err){
      let  error_messages = {};
        err.issues.map((err)=>{
            // error_messages.err.path[0] =  err.message
           let error_path = (err.path[0]);
           error_messages[error_path] = err.message;
        })
        return res.status(400).json({error_messages})

    }
}

export default validate;