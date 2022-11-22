import jwt from 'jsonwebtoken';
import { Secret } from '../../config/config.js';


export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}

export function GenerateToken(user){
    const payload = {
        id: user._id,
        displayName: user.displayName,
        userName: user.userName,
        emailAddress: user.emailAddress
    }

    const jwtOptions = {
        expiresIn: 604800 //1 Week
    }

    return jwt.sign(payload, Secret, jwtOptions);
}