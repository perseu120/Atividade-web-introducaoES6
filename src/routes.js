const express = require('express');
const UsersController = require('./controller/UsersController');
const routes = express.Router();


routes.get('/users', UsersController.list);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.delete);

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