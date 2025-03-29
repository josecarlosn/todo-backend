import express from 'express';
import task from './database/model/task.js';

const port = 3000;
const app = express();

app.get('/',async(req, res)=>{
    const data = await task.findAll();
    res.send(data); 
})


app.listen(port, ()=>{console.log(`Servidor rodando na porta: ${port}`)})