import mongoose from 'mongoose';
import {ProductModel} from '../model/ProductModel';
import logger from '../utils/logger';
export const ProductModelList= mongoose.model("products",ProductModel);
export default ProductModelList;

export const save= async (data:any) =>{
    const prod=new ProductModelList(data);
    return await prod.save();
}
export const find = async ()=>
{
  return await ProductModelList.find({});
}
export const findOneAndUpdate = async (id:any,body:any)=>
{
return await ProductModelList.findOneAndUpdate({_id:id},body);
}
export const deleteOne =async (req:any) => {
   return await ProductModelList.findByIdAndRemove({_id:req});
}
export const findById = async (id:any)=>
{
return await ProductModelList.findById({_id:id});
}
export const findEmployeeId =async(id:any) =>{
 return await ProductModelList.find({employeeId:id});
}
