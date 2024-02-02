import  express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import cookieParser from 'cookie-parser';
import cors from'cors';
import TransRoute from './routes/trans.js';
import createRoute from './routes/create.js';

const app= express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
    origin:'http://localhost:4200',
    credentials:true
}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use("/api/create",createRoute);
app.use("/api/transaction",TransRoute);
app.use("/api/role",roleRoute);
app.use("/api/auth", authRoute );
app.use("/api/user", userRoute);

//Response Handler MiddleWare

app.use((obj,req,res,next)=>{
    const statusCode=obj.status || 500;
    const message= obj.message || "something went wrong !";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a ===obj.status ) ? true : false ,
        status: statusCode,
        message: message,
        data :obj.data
        
    });
});


//db connection
const connectMongodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to db");
    } catch (error) {
        throw error;

    }
}




 
app.listen(3000, ()=>{
    connectMongodb();
    console.log("connected to backend");
})