const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const { execPath } = require('process');

// Settings 
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// middlewares  
app.use(morgan('combined'));
//routers
app.use(require('./routes'));
//static files  
app.use(express.static(path.join(__dirname, 'public')));

//listening the server 
var mensaje = 'Server on port: ' + app.get('port');
app.listen(app.get('port'), () => {
   console.log(mensaje.black.bgGreen);  
});
