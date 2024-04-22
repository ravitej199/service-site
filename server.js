import express from 'express';
import auth_router from './routes/auth-route.js';
import errorMiddleware from './middlewares/error-middleware.js';
import contact_router from './routes/contact-route.js';
import serviceRouter from './routes/service-router.js';
import admin_router from './routes/admin-router.js';
import cors from 'cors';
const app = express();
const PORT = 3000;
import connectdb from './db.js';
// mongodb+srv://ravitejravi90:vxBQwgpJ5vijE57Z@cluster0.xjbigfi.mongodb.net/admin_panel\

const corsOptions = {
    origin : "http://localhost:5173",
    methods : "GET,POST,DELETE,PUT,PATCH,HEAD",
    Credential : true,
};


app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth",auth_router)
app.use(errorMiddleware);
app.use("/api/form",contact_router)
app.use("/api/data",serviceRouter)
app.use("/api/admin",admin_router)


connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening at port ${PORT}`);
    });
});
 

app.get('/',(req,res)=>{
    res.status(200).send("Welcome ")
})

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.status(200).send(req.body)
})

