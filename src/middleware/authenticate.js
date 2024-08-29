import passport from "passport";

export const authenticate = (req, res, next) =>{
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err ||!user){
            return res.status(401).json({
                success: false,
                message: info.message || 'Invalid token'
            });
        }
        req.user = user;
        next();
    })(req, res);
}