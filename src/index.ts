import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import winston from 'winston';
import {connect} from './config/mongoconfig'
import { route } from './routes/ProductRoute';
import {router} from './routes/EmployeeRoute';
import { userRoute } from './routes/userRoute';
import logger from './utils/logger';
import jsonwebtoken from 'jsonwebtoken';
import *as swaggerDoc from './swagger.json';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import bodyParser from 'body-parser';


dotenv.config();
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());
app.listen(PORT,() =>{
    app.use('/swagger',swaggerUi.serve,
    swaggerUi.setup(swaggerDoc));
    logger.info("server running on PORT:",{PORT});
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
export const tokenSecret:any = process.env.accessTokenSecret;
console.log(tokenSecret);
export const anotherToken=process.env.anothorTokenSecret;
connect();
route(app);
//router(app);
//userRoute(app);


export default app;
 