import mongoose from "mongoose";

const userSchema = mongoose.Schema({
     email:{
        "type": "string",
        "required": true,
        "unique": true,
     },
     password:{
        "type": "string",
        "required": true,

     },
     name:{
        "type": "string",
        "required": true,
     }

}, {timstamps: true})



const User = mongoose.model('User', userSchema)

export default User;