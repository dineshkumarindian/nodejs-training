import { saveUser,getUser,logUser} from "../dao/userDao";

 
export const createUser = (res:any) =>{
    const create =saveUser(res);
    return create;
} 
export const getUserInfo =()=>{
    const get=getUser();
    return get;
}
export const logInService =(body:any) =>{
    const Service=logUser(body);
    return Service;
}
