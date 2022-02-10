
 //import {Schema} from 'mongoose';
import { identifier } from '@babel/types';
import  mongoose from 'mongoose';
import { number } from 'yargs';
import { employeeModel } from './EmployeeModel';
const schema =mongoose.Schema;
export const ProductModel =new schema({
    id:{ type: mongoose.Schema.Types.ObjectId, required: false },
    employeeId:{type:String},
    productName: String,
    productCode: String,
    proddescription: String,
    prodRating: Number,
  
});


