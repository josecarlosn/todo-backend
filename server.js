import express from 'express';
import task from './database/model/task.js';
import cors from 'cors'

const port = 3000;
const app = express();

app.use(express.json())
app.use(cors())

app.post('/add-task', async (req, res)=>{
    const {title, description} = req.body
    const data = await task.create({title, description}) 
    res.json(data)
})
app.get('/', async (req, res)=>{
    const data = await task.findAll();
    res.json(data);
})


app.listen(port, ()=>{console.log(`Servidor rodando na porta: ${port}`)})