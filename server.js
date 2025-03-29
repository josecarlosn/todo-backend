import express from 'express';

const port = 3000;
const app = express();

app.get('/',(req, res)=>{
    res.send('Servidor rodando')
})

app.listen(port, ()=>{console.log(`Servidor rodando na porta: ${port}`)})