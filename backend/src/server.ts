import express from 'express';
import path from 'path'; 
import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from'./errors/handler';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);












// ROTA- CONJUNTO
//RECURSO- USUÁRIO
//METODOS HTTP - GET, POST, PUT, DELETE
//PARAMETROS

//GET- BUSCAR UMA INFORMAÇÃO (LISTA,ITEM)
//POST- CRIANDO UMA INFORMAÇAO
//PUT- EDITANDO UMA INFORMAÇAO
//DELETE- DELETANDO UMA INFORMAÇAO 

//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users/1

//Driver nativo, query builder, ORM