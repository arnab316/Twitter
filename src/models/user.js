import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
userSchema.methods.comparePassword = function compare(password){
 return bcrypt.compareSync(password, this.password)
}

userSchema.methods.genJwt = function generate(){
     jwt.sign({id: this._id, email: this.email}, 'twitter_secret',{
      expiresIn: '1h',
     })
}


const User = mongoose.model('User', userSchema)

export default User;