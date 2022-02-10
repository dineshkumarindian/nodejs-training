import { format } from "path/posix";
import winston from "winston";
import 'winston-mongodb';
 
 const  transports =[
        new winston.transports.File({
            filename:'src/logs/example.log',
        }),
       new winston.transports.Console({
        
            level:'info',
            format:winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
                )
            
             }),
            new winston.transports.MongoDB({
                level:'info',
                db:'mongodb://localhost:27017/mydb',
               options:{
                    useUnifiedTopology: true
                },
                collection:'server_logs',
                
            
                })
               
                 

        
        //winston.format.printf((info) =>'${info.level}:${info.timestamp}:${info.timestamp)})
    ]           
const logger =winston.createLogger({transports});
 logger.info('dineshkumar');
 export default logger;