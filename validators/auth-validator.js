import zod from 'zod'

// Creating an object schema

const signupschema = zod.object({
    username: zod
    .string({required_error:"Username is required"})
    .trim()
    .min(3,{message:"Username must be atleast of 3 characters"})
    .max(255,{message: "Username must not be more thsn 255 characters"}),

    email: zod
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),

    phone: zod
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"Phone must be atleast 10 characters"})
    .max(10,{message:"Phone must not be more than 10 characters"}),

    password: zod
    .string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be minimum of 8 characters"})
    .max(16,{message:"Password must not be more than 16 characters"})
})
const loginchema = zod.object({
  
    email: zod
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),

    password: zod
    .string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be minimum of 8 characters"})
    .max(16,{message:"Password must not be more than 16 characters"})
})

export default {signupschema,loginchema};