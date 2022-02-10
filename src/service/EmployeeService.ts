import {saveList,findAll,updateEmp,delEmp,getEmp} from '../dao/EmployeeDao';
import { findEmployeeId } from '../dao/ProductDao';
import logger from '../utils/logger';

export const createEmployee = (body:any)=>{
    const create=saveList(body);
    return create;
}
export const getEmployee =()=>{
const find = findAll();
return find;
}
export const findOneAndUpdate =async (id:any,body:any) =>{
    const findOne=await updateEmp(id,body);
    return findOne;
}
export const findByIdAndRemove = async (result:any) =>{
    const findRemove =await delEmp(result);
    return findRemove;
}
export const getEmpId =async (result:any) =>
{
const findId =await getEmp(result);
return findId;
}
export const getEmpProduct =async (result:any) =>{
    const empProduct = await findEmployeeId(result);
    return empProduct;  
}
export const productEmpData= async (id:any)=>
{
    
    const employeeData = await getEmpId(id);
    if(employeeData && employeeData.length>0){
        const productData = await getEmpProduct(id);
        const employeeProducts={employee:employeeData,product:productData};
       return employeeProducts;
    }
    else{
        return "Employee doesnot exist";
    }
}




