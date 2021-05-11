const express = require('express');
const app = express();
const morgan = require('morgan');
require('./database');
const cors = require('cors');
 

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//VARIABLES
app.set('port', 8000)

//ROTAS
app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
    console.log(`Api escutando na porta ${app.get('port')}`);
})
