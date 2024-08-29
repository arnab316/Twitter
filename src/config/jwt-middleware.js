import JWT from 'passport-jwt'
import User from '../models/user.js';
const jwtStratagy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_secret'
}

export const passportAuth = (passport) =>{
    passport.use(new jwtStratagy(opts, async(jwt_playload,done)=>{
    const user = await User.findById(jwt_playload.id);
    if(!user){
        done(null, false);
    } else {
        done(null, user); 
    }
    }
    
))
}