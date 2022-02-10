import request from 'supertest';
import {Express} from 'express-serve-static-core';
import app from '../..';
import {createProductList,getProductList,updateProduct,deleteProduct,getByProduct,getEmployeeId} from '../ProductControl';
import {createEmp,getEmp} from '../employeeControl';
import {createUserDetail,loginData} from '../userControl';
import {jest} from '@jest/globals'; 
import { doesNotMatch } from 'assert';
let server: Express;

beforeAll(async () => {
    server = app;
});
describe('GET /employees', () =>{
    it('should return 200 & valid response if request param list is empity', done => {
      request(server)
        .get('/employees')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
        if (err) return done(err)
        done();
        })
    });
    it('should return 404 found get the employee data',done =>{
      expect(getEmp).not.toThrow()
      done();
    })
});
describe('should create a post for employee',() =>{
    it('should return 201 & create  post',done =>{
       request(server)
       .post('/employee') 
       .expect('content-type',/json/)
       .expect(201)
       .end((err,res)=>{
          if(err) return done(err);
        done();
       })
    });
    it('should not throw an error',async()=>{
      await expect(createEmp).rejects.toThrow()
    })
 });
  describe('should update the employee detail ',() =>{
    it('should return 200 & put employee detail',done=>{
       request(server)
       .put('/employee/${id}')
       .expect('content-type',/json/)
       .expect(200)
       .end((err,res) =>{
          if(err) return done(err); 
          done();
       })
    });
  });
  describe('should delete the employee detail',() =>{
    it('should return 200 & delete employee detail',done =>{
       request(server)
       .delete('/employee/${id}')
        .expect('content-type',/json/)
        .expect(200)
        .end((err,res)=>{
           if(err) return done(err);
            done();
        })
     });
    
  });
  describe('should get the employee details',() =>{
      it('should 200 & get employee detail',done =>{
        request(server)
        .get('/employee/${id}')
        .expect('content-type',/json/)
        .expect(200)
        .end((err,res)=>{
           if(err) return done(err);
            done();
        })
            
      });
      
  });
  describe('should get product and employee details',() =>{
      it('should 200 & get product and employee detail ',done =>
      {
          request(server)
          .get('/employee/api/${id}')
          .expect('content-type',/json/)
            .expect(200)
            .end((err,res)=>{
           if(err) return done(err);
            done();
        })

      });
      
  });
  describe('should get the value of product data',() =>{
    it('should return 200 & getting the application', done => {
         jest.setTimeout(5000)
         request(server).get('/products')
         .expect('content-type',/json/)
         .expect(200)
        .end(function(err,res){
            if(err) return done(err);
            done();
         });
      });
       
    it('should return 404 found',done =>{
      expect(getProductList).not.toThrow();
      done();
    })
  
  });
  describe('should create a product',() =>{
    it('should return 201 & create a post',done =>{
       
       request(server).post('/product')
       .expect('content-type',/json/)
       .expect(200)
       .end((err,res) =>{
          if(err) return done(err);
          
          done();
       })
    });
    it('should throw an error',done =>{
      expect(createProductList).not.toThrow();
      done();
   });
  
  
});
  describe('should upload the product',()=>{
    it('should return 200 & upload the product',done =>{
      
       request(server).put('/product/${id}')
       .expect('content-type',/json/)
       .expect(200)
      .end((err,res) =>{
          if(err) return done(err);
          done();
       })
    });
    it('should return 200 invalid id', done =>
    {
      expect(updateProduct).rejects.toThrow()
       done();
   });
  });
  describe('should delete the product',() =>{
    it('should return 200 & delete the product',done =>{
       request(server).delete('/product/${id}')
       .expect('content-type',/json/)
       .expect(200)
       .end((err,res)=>{
          if(err) return done(err);
      done();
       })
      });
   });
   describe('should get the product id',() =>{
    it('should return 200 & get the product id',done =>{
       
       request(server).get('/product/${id}')
       .expect('content-type',/json/)
       .expect(200)
       .end((err,res)=>{
          if(err)return done(err);
      done();
       })
    });
   });
   describe("should create a user data ",()=>{
      it('should post the user data',done=>{
         request(server).post('/signup')
         .expect('content-type',/json/)
         .expect(200)
         .end((err:any,res:any)=>{
               if(err)return done(err);
         done();
         })
      });
      it('should user catch block',done =>
      {
         expect(createUserDetail).not.toThrow();
         done();
      })
   });
   describe('should get the user data',() =>{
      it('should get user information',done =>{
         jest.setTimeout(5000)
         request(server).get('/users')
         .expect('content-type',/json/)
         .expect(200)
         .end((err:any,res:any)=>{
         expect(res.headers['authorization'].split(' ')[1]);
         done();
         });
      })
   });
   describe('should login the user data',()=>{
      it('should login user information',done =>{
         request(server).post('login')
         .expect('content-type',/json/)
         .expect(200)
         .end((err:any,res:any)=>{
            if(err)return done(err); 
         })
   })
   it('should login error page',done =>{
      expect(loginData).rejects.toThrowError("invalid username and password");
      done();
   })
});



  