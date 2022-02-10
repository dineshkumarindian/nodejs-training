import mongoose from "mongoose";
import { userModel } from "../model/userModel";
import *as jwt from 'jsonwebtoken';
import { tokenSecret,anotherToken } from "..";

export const userModelList =mongoose.model('userModel',userModel);
export default userModelList;
 
export const  saveUser= async( res:any) =>{
    const saveItem = new userModelList(res);
    return await saveItem.save();
}
export const getUser = async()=>{
    return await userModelList.find({});
    
}
export const logUser =async (body:any) =>{
    const user =await userModelList.find(
    {userName:body.userName },{passWord:body.passWord});
    if(user){
        const accessToken:string =jwt.sign({userName:user.userName,passWord:user.passWord},process.env.accessTokenSecret as string);
        const anotherToken1:string =jwt.sign({userName:user.userName,passWord:user.passWord},process.env.anothorTokenSecret as string);
        const mergeToken=({token:accessToken,anotherToken1});
        return mergeToken;
    }
    else{
        return 'invalid userName and Password';
    }
   
}

