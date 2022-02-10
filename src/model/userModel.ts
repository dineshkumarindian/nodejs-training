import mongoose from "mongoose";

const schema= mongoose.Schema;
export const userModel = new schema({
    firstName:String,
    lastName:String,
    DOB:Date,
    Address:String,
    pin:Number,
    Phone:Number,
    userName:String,
    passWord:String,
});
export interface UserModelOne{
    firstName:String,
    lastName:String,
    DOB:Date,
    Address:String,
    Pin:Number,
    Phone:Number,
    userName:String,
    passWord:String,

}





