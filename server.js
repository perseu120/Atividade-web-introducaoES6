const express = require('express');

const app = express();
app.use(express.json());

/**
 * GET:buscar informaçoes
 * POST: adiciona informações ou cria
 * PUT: atualiza informações
 * DEL: deletar informações
 */

/**
 * PARÂMETROS
 * Query: pode passar filtros 
 * ROTAS:  utilizados para identificar os retornos
 * REQUEST BODY: passa direto no corpo da requisição
 */



// app.get('/users', (req, res)=>{
//     res.json({
//         nome:'josimar',
//         empresa: 'UESB',
//         funcao: 'Estudante'
//     })
// })

app.post('/users', (req, res)=>{
    res.json({
        nome:'josimar',
        empresa: 'UESB',
        funcao: 'Estudante'
    })
})

app.get('/users', (req, res)=> {
    const params = req.query;
    console.log(params);

    res.json(params);
})

app.post('/users/:id', (req, res)=> {
    const params = req.params;
    console.log(params);

    res.json(params);
})

app.post('/users', (req, res)=> {
    const params = req.body;
    console.log(params);

    res.json(params);
})


app.listen(3001);