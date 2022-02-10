import express from 'express';
import logger from '../utils/logger';
import { createProductList,getProductList,
    getByProduct,updateProduct,deleteProduct} from '../controller/ProductControl';

export const route=(app:express.Application) => 
{
    app.post('/product',createProductList);
    app.get('/products',getProductList);
    app.put('/product_up/:id',updateProduct);
    app.delete('/product_del/:id',deleteProduct);
    app.get('/get_product/:id',getByProduct);
   
}
