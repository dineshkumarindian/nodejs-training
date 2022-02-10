import  Mongoose from "mongoose";
const schema=Mongoose.Schema;
export const employeeModel =new  schema({
    id:{ type: Mongoose.Schema.Types.ObjectId, required: false },
    employeeName:String,
    employeeRole:String,
    employeeAddress:String,
    employeeSalary:Number
});

export interface EmployeeDetail{
    id:number | undefined ;
    employeeName:String,
    employeeRole:String,
    employeeAddress:String,
    employeeSalary:Number,
}
