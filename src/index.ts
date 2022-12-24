import express from 'express';
import { Connectar } from './services/db/connectMongoDB';
import { router } from './router';
const app=express();
app.use(express.json());
Connectar();
const PORT=3001;

app.use(router);

app.listen(PORT,()=>{
    console.log(`💡Server is running on http://localhost:${PORT}`);
});

