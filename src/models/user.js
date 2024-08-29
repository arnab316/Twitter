import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

userSchema.pre('save', function(next){
   const user = this;
   const SALT = bcrypt.genSaltSync(9);
   const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});

const User = mongoose.model('User', userSchema)

export default User;