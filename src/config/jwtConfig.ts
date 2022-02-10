import * as jwt from 'jsonwebtoken';
import {tokenSecret} from '../index';
import userModelList from '../dao/userDao';

export const jwtConfig= async(id:String) =>{
const accessToken:String =await jwt.sign({_id:id},process.env.accessTokenSecret as string,{
expiresIn:86400
});
return accessToken;  
}
export const verifyConfig=async(token:any) =>
{
    const data =await jwt.verify(token,process.env.accessTokenSecret as string,(err:any,res:any)=>{
        if(err){
            console.log(err);
            return false;
        }
        else{
        return true;
        }
        });
    return data;
}
