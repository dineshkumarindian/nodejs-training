import mongoose from 'mongoose';


export const connect = () =>{
const uri:string = process.env.MONGO as string;
mongoose.Promise = global.Promise;
mongoose.connect( uri,
    { useNewUrlParser: true,
        useUnifiedTopology: true ,
         useCreateIndex: true,
        useFindAndModify:false
    });
    }
    

    
