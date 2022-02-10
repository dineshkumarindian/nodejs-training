import { Request,response } from 'express';
import { ProductModel } from '../model/ProductModel';
import { Product} from '../model/Product';
import logger from '../utils/logger';
import {jwtConfig,verifyConfig} from '../config/jwtConfig';
import { createProduct,findProduct,findOne,findUpdate,deleteProd,prodEmployeeId} from '../service/ProductService';

export const createProductList = async(req:any,res:any) =>
{
    try{
    const saveList:Product=req.body;
    const product:any=await createProduct(saveList);
    const TokenProd:String=await jwtConfig(product._id); 
    const response ={product,
        token:TokenProd};
    res.send(response);
   }
    catch(err){
      throw new Error('my error'); 
    }
   }
export const getProductList = async (req:any,res:any)=> {
    const tokenAuth:any =req.headers.authorization;
    if(tokenAuth){
    const token:any =req.headers.authorization.split(' ')[1];
       const verifyProductJWT:any =await verifyConfig(token);
        if(verifyProductJWT)
        { 
        const product1:Product = await findProduct();
        res.send(product1);
        }
    else{
        res.status(401).send('unauthorized');
        }
    }
    else{
        res.status(401).send('didnot received token.');
    }
}
export const updateProduct = async (req:any,res:any)=>
{
    try{
    const id:String =req.params.id;
    const body:Product=req.body;
    const productRes:any = await findUpdate(id,body);
    res.send(productRes);
    }
    catch(err){
        res.send(err);
    }
}
export const deleteProduct = async (req:any, res:any)=>
{
    try{
    const id:String = req.params.id;
    const deleteRes =await deleteProd(id);
    res.send(deleteRes);  
    }
    catch(err){
        res.send(err);    
    }
} 
export const getByProduct = async (req:any,res:any)=>{
    try
    {
    const id:String = req.params.id;
    const getProduct:any = await findOne(id);
    res.send(getProduct);
     }
   catch(err){
      
       res.send(err);
   }
}
export const getEmployeeId = async (req:any,res:any) =>
{
    try{    
        const id:String =req.params.id;
        const getEmployee1:any =await prodEmployeeId(id);
        res.send(getEmployee1);
    }
    catch(err){
       res.send(err);
    }
}

    




