const express = require('express');
const routes = express.Router();



// routes.get('/users', (req, res)=> {
//     const params = req.query;
//     console.log(params);

//     res.json(params);
// })
// routes.post('/users/:id', (req, res)=> {
//     const params = req.params;
//     console.log(params);

//     res.json(params);
// })

routes.get('/users', async(req, res)=> {

})

routes.post('/users', async(req, res)=> {
    
})

module.exports = routes;


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
/**
// routes.get('/users', (req, res)=>{
//     res.json({
//         nome:'josimar',
//         empresa: 'UESB',
//         funcao: 'Estudante'
//     })
// })
//routes.post('/users', (req, res)=>{
//     res.json({
//         nome:'josimar',
//         empresa: 'UESB',
//         funcao: 'Estudante'
//     })
// })
*/