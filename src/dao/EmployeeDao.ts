import Mongoose from "mongoose";
import { employeeModel } from "../model/EmployeeModel";
import{ProductModelList} from '../dao/ProductDao';
import logger from "../utils/logger";

export const modelEmp = Mongoose.model("employees",employeeModel);
export default modelEmp;
export const saveList = async(result:any)=>{
    const saveItem = new modelEmp(result);
    return await saveItem.save(); 
}
export const findAll = async() => {
    return await modelEmp.find({});

}
export const updateEmp =async(id:any,body:any) =>
{
return await modelEmp.findOneAndUpdate({_id:id},body);
}
export const delEmp = async(req:any) => {
 
return await modelEmp.findOneAndRemove({_id:req});

}
export const getEmp = async(id:any)=>{
return await modelEmp.find({_id:id});
}

