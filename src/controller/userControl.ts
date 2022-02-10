import {createUser,getUserInfo,logInService} from '../service/userService';
import { userModel,UserModelOne } from '../model/userModel'; 
import { Jwt } from 'jsonwebtoken';
import { jwtConfig,verifyConfig} from '../config/jwtConfig';

export const createUserDetail = async (req:any,res:any) =>{
    try{
    const create:UserModelOne =req.body;
    const user:any = await createUser(create);
    const jwtToken:String =await jwtConfig(user._id);
    const response={
            user,
        token:jwtToken,
    }
    res.send(response);
 }
catch(err){
    res.send(err);

}
}
export const getUserData =async (req:any,res:any) =>{
    try{
        const tokenAuth=req.hearders.authorization;
        if(tokenAuth){
    const token:any =req.headers.authorization.split(' ')[1];
    const verify:any = await verifyConfig(token);
    if(verify){
        const getUser:any =await getUserInfo();
        res.send(getUser);
    }
    else{
        res.status(401).send({status:'unauthorized'});
    }
    }
    else{
        res.satus(401).send('didnot received token');
    }
    }
    catch(err){
        res.send(err);
    }
}
export const loginData =async(req:any,res:any) =>{
    try{
        const tokenUser:{userName:any,passWord:any}=req.body;
        const getToken =await logInService(tokenUser);
       res.send(getToken);
    }
    catch(err){
        throw new Error('invalid username and password');
    }

}