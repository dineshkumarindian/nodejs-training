
import {createEmployee,getEmployee,findOneAndUpdate,findByIdAndRemove,getEmpId,getEmpProduct,productEmpData} from '../service/EmployeeService';
import { EmployeeDetail} from '../model/EmployeeModel';
import logger from '../utils/logger';
import {jwtConfig,verifyConfig} from '../config/jwtConfig';
export const createEmp = async (req:any,res:any) =>{
   try{
    const employee:EmployeeDetail = req.body;
    const employeeOne = await createEmployee(employee);
    const tokenEmp:String =await jwtConfig(employeeOne._id);
    const response={
        employeeOne,
        token:tokenEmp
    };
    res.status(201).send(response);
    }
    catch(err){
        
        res.send(err);
    }
}
export const getEmp = async (req:any, res:any)=>{
    try{
        const tokenAuth:any =req.headers.authorization;
        if(tokenAuth){
        const token:any =req.headers.authorization.split(' ')[1];
        const dataToken:any =await verifyConfig(token);
        if(dataToken){
        const employeeGet:EmployeeDetail = await getEmployee();
        res.send(employeeGet);
       }
        else{
            res.status(401).send('unauthorized');
        }
    }
    else{
        res.status(401).send('didnot received Token');
    }
    }
    catch(err){
       res.send(err);
    }
}
export const updateEmp =async(req:any,res:any) =>{
    try{
        const id:String = req.params.id;
        const body:EmployeeDetail =req.body;
        const updateEmp=await findOneAndUpdate(id,body);
        res.send(updateEmp);
    }
    catch(err){
        res.send(err);
        }
}
export const deleteEmp = async(req:any, res:any)=>{
    try{
        const employee:EmployeeDetail = req.params.id;
        const deleteEmp =await findByIdAndRemove(employee);
        res.send(deleteEmp);
    }
    catch(err){
        res.send(err);
    }
}
export const employeeId =async(req:any,res:any) =>
{
    try{
        const empid:string =req.params.id;
        const getEmployee =await getEmpId(empid);
        res.send(getEmployee);
       }
    catch(err){
       res.send(err);
    }
}
export const employeeById= async(req:any,res:any) =>
{
    try{
    const empId:string = req.params.id;
    const getEmpValue = await getEmpProduct(empId);
    res.send(getEmpValue);
    }
    catch(err){
    res.send(err);
    }
}
export const getValueEmpProduct = async(req:any,res:any)=>{
    try{
        const productAndEmp =req.params.id;
        const getValueEmp=await productEmpData(productAndEmp);
        res.send(getValueEmp);
    }
    catch(err){
       res.send(err);

    }

    
}
