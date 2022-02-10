import { ProductModel } from "../model/ProductModel";
import {ProductModelList} from '../dao/ProductDao';
import {save,find,findById,findOneAndUpdate,deleteOne,findEmployeeId} from '../dao/ProductDao';
import logger from "../utils/logger";

export const createProduct = (body:any) => { 
    const product=save(body);
    return  product;
}
export const findProduct = () =>{
    const productFind = find();
    return productFind; 
}

export const findUpdate =async (id:any,body:any)=>{
    const findUp = await findOneAndUpdate(id,body);
   return findUp;

}
export const deleteProd =async (id:any) =>{
    const deletePro =await deleteOne(id);
    return deletePro;
}
export const findOne =(id:any)=>{
    const findId = findById(id);
    return findId;

}
export const prodEmployeeId =(id:any)=>{
    const prodEmpId = findEmployeeId(id);
   return prodEmpId;
}
