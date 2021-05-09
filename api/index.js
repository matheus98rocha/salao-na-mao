const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');

//MIDDLEWARES
app.use(morgan('dev'));

//VARIABLES
app.set('port', 8000)

//ROTAS
app.use('/', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
    console.log(`Api escutando na porta ${app.get('port')}`);
})
