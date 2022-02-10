import express from 'express';
import {createEmp,getEmp,updateEmp,deleteEmp,employeeId,getValueEmpProduct} from '../controller/employeeControl';
export const router =(app:express.Application) =>
{
    app.post('/employee',createEmp);
    app.get('/employees',getEmp);
    app.put('/employee/:id',updateEmp);
    app.delete('/employee/:id',deleteEmp);
    app.get('/employee/:id',employeeId);
    app.get('/employee/api/:id',getValueEmpProduct);
}