const express = require('express');/* Import de pacote */
const cors = require('cors');
const routes = require('./routes');/* Import de arquivo */


const app = express();

/**
 * Cors cors({origin: 'https://meuservidor.com.br'}) quando for hospedar em um servidor
 */
app.use(cors());
/**  
 * Configurando Aplicação backend para entender JSON de uma requisição
 */
app.use(express.json());
/**
 * Configurando Aplicação backend a utilizar routes.js como rotas de requisições ex: GET, POST, PUT DELETE etc...
 */
app.use(routes);


app.listen(3333);