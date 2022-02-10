import express from 'express';
import {createUserDetail,getUserData, loginData} from '../controller/userControl';
import userModelList from '../dao/userDao';
export const userRoute =(app:express.Application)=>{
    app.post('/signup',createUserDetail);
    app.get('/users',getUserData);
    app.post('/login',loginData);
   
   

    
}